
/**
 * Minimal IES/ETG verifier reference (TypeScript)
 *
 * This is intentionally small and does not include:
 * - key management
 * - persistence
 * - transport
 * - policy scoring
 *
 * It demonstrates verification semantics:
 * - TTL freshness
 * - audience match
 * - nonce / replay hook
 * - intent hash match
 * - optional exec hash match
 */

import crypto from "crypto";

export type Action = "ALLOW" | "STEP_UP" | "DENY";
export type RiskBand = "LOW" | "MEDIUM" | "HIGH";

export interface Intent {
  id: string;
  type: string;
  parameters: Record<string, any>;
  created_at: string; // ISO
}

export interface Decision {
  intent_id: string;
  risk_band: RiskBand;
  action: Action;
  policy: { policy_id: string; version: string | number };
  evaluated_at: string; // ISO
  reasons?: string[];
}

export interface AuthorizationObject {
  intent_hash: string;
  action: Action;
  risk_band?: RiskBand;
  ttl: number; // unix seconds
  nonce: number | string;
  aud: string;
  policy?: { policy_id: string; version: string | number };
  exec_hash?: string | null;
  sub?: string | null;
  sig: string;
}

export interface VerifyOptions {
  aud: string;
  now?: number; // unix seconds
  // hook to check and record nonce usage (replay prevention)
  checkNonce?: (nonce: string) => Promise<{ ok: boolean; reason?: string }>;
  // hook to verify signature; pluggable for ed25519, secp256k1, etc.
  verifySignature: (payload: string, sig: string) => Promise<boolean>;
}

export function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input).digest("hex");
}

/**
 * Canonicalize JSON with stable key ordering.
 * This is minimal and intended only for reference.
 * Production systems should use a robust canonicalization scheme (e.g., JCS RFC 8785).
 */
export function canonicalize(obj: any): string {
  if (obj === null || typeof obj !== "object") return JSON.stringify(obj);
  if (Array.isArray(obj)) return "[" + obj.map(canonicalize).join(",") + "]";
  const keys = Object.keys(obj).sort();
  return "{" + keys.map(k => JSON.stringify(k) + ":" + canonicalize(obj[k])).join(",") + "}";
}

export function computeIntentHash(intent: Intent): string {
  // Domain-separated
  const material = canonicalize({ domain: "IES:INTENT:v1", intent });
  return sha256Hex(material);
}

export function computeExecHash(domain: string, params: Record<string, any>): string {
  const material = canonicalize({ domain, params });
  return sha256Hex(material);
}

export async function verifyAuthorizationObject(
  intent: Intent,
  ao: AuthorizationObject,
  opts: VerifyOptions,
  expectedExecHash?: string | null
): Promise<{ ok: boolean; reason?: string }> {
  const now = opts.now ?? Math.floor(Date.now() / 1000);

  if (ao.aud !== opts.aud) return { ok: false, reason: "AUDIENCE_MISMATCH" };
  if (ao.ttl < now) return { ok: false, reason: "AO_EXPIRED" };

  const intentHash = computeIntentHash(intent);
  if (ao.intent_hash !== intentHash) return { ok: false, reason: "INTENT_HASH_MISMATCH" };

  if (expectedExecHash && ao.exec_hash && ao.exec_hash !== expectedExecHash) {
    return { ok: false, reason: "EXEC_HASH_MISMATCH" };
  }

  if (opts.checkNonce) {
    const n = await opts.checkNonce(String(ao.nonce));
    if (!n.ok) return { ok: false, reason: n.reason ?? "NONCE_REJECTED" };
  }

  // Verify signature over canonical AO payload without sig field
  const { sig, ...unsigned } = ao as any;
  const payload = canonicalize({ domain: "IES:AO:v1", ao: unsigned });

  const sigOk = await opts.verifySignature(payload, sig);
  if (!sigOk) return { ok: false, reason: "SIGNATURE_INVALID" };

  return { ok: true };
}
