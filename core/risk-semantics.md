
# Risk Semantics

## Risk Bands
ETG uses three canonical risk bands:

- **LOW**: risk within acceptable bounds under current policy.
- **MEDIUM**: elevated risk requiring additional verification or constraints prior to execution.
- **HIGH**: risk unacceptable; execution must be denied.

Implementations MAY use finer-grained internal scores, but MUST map to these bands when producing a Policy Decision.

## Band Mapping Requirements
- HIGH MUST map to action DENY.
- MEDIUM MUST map to action STEP_UP (or equivalent constrained authorization).
- LOW MAY map to action ALLOW, subject to policy and scope requirements.

## Deterministic vs Probabilistic
- Deterministic methods SHOULD be primary for policy safety-critical decisions.
- Probabilistic methods (including AI/ML) MAY inform escalation but MUST NOT be the sole authority for allowing execution.
