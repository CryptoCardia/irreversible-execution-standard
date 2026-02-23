
# Policy Actions

ETG defines a minimal set of policy actions that are applicable across irreversible rails.

## Actions
- **ALLOW**: Execution may proceed when an Authorization Object is presented and verified.
- **STEP_UP**: Additional verification is required prior to issuing an Authorization Object, or additional constraints must be met.
- **DENY**: Execution MUST NOT proceed.

## STEP_UP Examples (Non-normative)
STEP_UP MAY require one or more of:
- WebAuthn / passkeys
- Out-of-band confirmation (push)
- OTP
- Dual approval / four-eyes
- Cooling-off delay and re-authorization
- Policy-based limits / caps

## Conformance
Any ETG implementation MUST map its internal decisioning to ALLOW | STEP_UP | DENY.
