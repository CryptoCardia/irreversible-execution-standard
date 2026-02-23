# Stablecoin Test Vector Notes

This folder contains deterministic fixtures for the ETG Stablecoin Profile.

## Hashes

intent_hash is computed as:
sha256( canonicalize({ domain: "IES:INTENT:v1", intent }) )

exec_hash is computed as:
sha256( canonicalize({ domain: "IES:EXEC:stablecoin:v1", params }) )

Where params includes:
- chain_id
- token_address
- to
- amount

Canonicalization guidance is defined in /core/canonicalization.md.
A minimal reference canonicalizer exists in /reference/verifier-minimal.ts.
