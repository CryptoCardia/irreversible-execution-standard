
# Audit Requirements

IES requires auditability for irreversible execution.

## Required Properties
Risk evaluations and policy decisions MUST be:

1. **Persistable**: stored in durable storage.
2. **Replayable**: sufficient inputs are stored to reproduce the decision deterministically (including policy version).
3. **Attributable**: tied to the acting principal or system identity.
4. **Time-bounded**: the time window (TTL) and evaluation timestamps are recorded.
5. **Explainable at the policy layer**: a human reviewer can identify the policy action and the primary contributing factors.

## Recommended Fields (Non-normative)
- intent_id
- tenant_id / org_id
- actor_id / user_id
- deterministic_score + factors
- advisory_score + tags (if present)
- final_risk_band
- policy_action
- policy_id + version
- ttl, nonce
- timestamps (created_at, evaluated_at)
