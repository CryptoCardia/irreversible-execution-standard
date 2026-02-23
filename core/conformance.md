# Conformance

This document defines conformance requirements for implementations claiming compatibility with IES and/or ETG.

## IES Conformance

An implementation is **IES-conformant** if it satisfies the IES Core invariants:

- Declared Intent MUST exist prior to authorization.
- Risk evaluation MUST occur prior to authorization.
- Policy determination MUST resolve to ALLOW | STEP_UP | DENY.
- Authorization Object MUST bind intent + decision + ttl + nonce + audience.
- Replay MUST be prevented.
- Enforcement MUST verify Authorization immediately prior to execution.
- Decisions MUST be auditable (persistable, replayable, attributable).

## ETG Conformance

An implementation is **ETG-conformant** if:

- Risk is mapped to a canonical Risk Band (LOW | MEDIUM | HIGH).
- Risk Band maps to canonical actions:
  - HIGH MUST result in DENY
  - MEDIUM MUST result in STEP_UP
  - LOW MAY result in ALLOW subject to scope constraints
- Probabilistic systems MAY escalate risk but MUST NOT be the sole authority for allowing execution.

## Profile Conformance

An implementation is **Profile-conformant** (e.g., Stablecoin Profile) if it satisfies:
- the profile Intent requirements
- the profile binding requirements
- the profile enforcement considerations

## Claiming Compatibility

Projects SHOULD describe compatibility as:
- "IES v1 conformant"
- "ETG v1 conformant"
- "ETG Stablecoin Profile v1 conformant"
