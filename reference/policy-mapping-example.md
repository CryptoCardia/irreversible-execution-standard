
# Policy Mapping Example (Non-normative)

This document provides an illustrative mapping from risk band to policy action.

## Mapping
- HIGH  -> DENY
- MEDIUM -> STEP_UP
- LOW -> ALLOW (unless scope requires step-up)

## Notes
Actual implementations may incorporate additional constraints:
- transaction caps
- allowlists
- dual approval
- cooling-off delays
- time-of-day restrictions
- jurisdiction constraints

Implementations MUST still map to ALLOW | STEP_UP | DENY for conformance.
