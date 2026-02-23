
# Authorization Object (AO) Binding

This document defines minimal binding semantics for an Authorization Object used to gate irreversible execution.

## Required Fields
An AO MUST include:
- **intent_hash**: digest of the intent parameters
- **action**: ALLOW | STEP_UP | DENY (AO SHOULD only be issued for ALLOW)
- **risk_band**: LOW | MEDIUM | HIGH (optional but recommended)
- **ttl**: unix timestamp (seconds) after which AO is invalid
- **nonce**: monotonically increasing value or unique token per principal
- **aud**: audience / execution domain identifier
- **sig**: signature over the canonical AO payload

## Optional Fields
- **policy_id** and **policy_version**
- **exec_hash** (rail-specific binding)
- **subject** (principal identifier)
- **reason_codes** (high-level categories; avoid sensitive leakage)

## Signature Domain Separation
AO signatures MUST be domain-separated (e.g., include a constant domain string in the signed material).

## Replay Protection
Enforcement points MUST reject:
- expired TTL
- previously-used nonce
- audience mismatch
