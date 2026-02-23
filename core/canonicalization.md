# Canonicalization

IES/ETG uses hashes for binding (intent_hash, exec_hash, AO signing payload). Hash stability requires deterministic canonicalization.

## Requirements (Normative)

1. Implementations MUST use a deterministic canonicalization method for any hashed object.
2. Implementations MUST document the canonicalization method used.
3. Canonicalization MUST be stable across platforms and languages.
4. Canonicalization MUST define:
   - key ordering
   - numeric formatting
   - string encoding
   - whitespace rules
   - handling of null / missing fields
   - handling of arrays

## Recommended Approach

Implementations SHOULD use JSON Canonicalization Scheme (JCS, RFC 8785) or an equivalent formally-defined canonicalization.

## Minimal Reference Canonicalization (Non-normative)

The repository includes a minimal canonicalization reference in `/reference/verifier-minimal.ts` that:
- sorts object keys lexicographically
- uses compact JSON encoding
- preserves array order

This minimal approach is suitable for examples and test vectors but production systems SHOULD adopt a formally specified scheme (e.g., JCS RFC 8785) to avoid ambiguity.

## Domain Separation

All hashes and signatures MUST include a domain separation string in the canonicalized payload to prevent cross-protocol misuse.

Examples:
- "IES:INTENT:v1"
- "IES:AO:v1"
- "IES:EXEC:stablecoin:v1"
