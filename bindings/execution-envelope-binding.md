
# Execution Envelope Binding

This document defines how ETG authorization artifacts bind to an Execution Envelope or equivalent execution payload.

## Requirements
An Authorization Object (AO) that permits execution MUST bind to:
- Intent (or intent_hash)
- Policy decision/action
- TTL
- Nonce/replay control
- Audience (execution domain)

If an Execution Envelope is used, it SHOULD include:
- intent_hash
- policy_hash or policy reference (id + version)
- exec_hash (rail-specific digest of execution parameters)
- ttl
- nonce
- signature(s)

## Exec Hash
- exec_hash MUST be computed over canonicalized execution parameters for the target rail.
- exec_hash SHOULD be domain-separated (e.g., prefix like "IES:EXEC:v1").

## Canonicalization
Implementations SHOULD use a deterministic canonicalization method for hashing (e.g., JSON canonicalization) and MUST document it.

## Verification
The enforcement point MUST verify:
- signature validity and audience match
- TTL freshness
- nonce correctness / uniqueness
- intent_hash match
- exec_hash match (if present/required by profile)
