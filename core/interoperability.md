# Interoperability

IES is designed to be rail-agnostic. Interoperability depends on strict domain separation and explicit profiles.

## Domains

Implementations MUST define an execution domain identifier and bind it into authorization artifacts (audience).

Examples:
- executor:stablecoin:v1
- executor:rwa:v1
- executor:securities:v1
- executor:treasury:v1
- executor:contract-admin:v1

## Cross-rail Safety

Authorization MUST NOT be valid across domains by default.
Implementations MUST reject:
- audience mismatch
- unknown profiles
- mismatched exec_hash domains

## Profiles as Compatibility Contracts

Profiles define:
- required Intent fields
- exec_hash construction rules
- enforcement expectations

Profiles are the unit of interoperability. A system can be IES/ETG conformant while supporting only a subset of profiles.

## Policy Versioning

For replayability:
- decisions SHOULD record policy_id and policy version
- authorization MAY include a policy reference

## Future Extension (Non-normative)

Future versions MAY define:
- cross-institution attestations
- standardized audit exports
- registry of profile identifiers
