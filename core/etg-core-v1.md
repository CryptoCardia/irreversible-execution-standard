
# ETG Core v1
## Execution-Time Governance

ETG defines governance semantics that satisfy IES Core invariants for irreversible execution.

### 1. Model
ETG transforms:
- Intent + Context + Signals
into:
- Risk Band + Policy Action

### 2. Risk Bands
ETG defines canonical risk bands:
- LOW
- MEDIUM
- HIGH

### 3. Policy Actions
ETG defines canonical actions:
- ALLOW
- STEP_UP
- DENY

### 4. Normative Requirements
- HIGH MUST produce DENY.
- MEDIUM MUST produce STEP_UP.
- LOW MAY produce ALLOW, subject to scope constraints.

### 5. Deterministic vs Probabilistic
- Deterministic evaluation SHOULD be primary for safety-critical gates.
- Probabilistic systems (including AI/ML) MAY inform escalation.
- AI/ML MUST NOT be the sole authority for allowing execution.

### 6. Authorization
If action is ALLOW, an Authorization Object MUST be issued binding:
- intent_hash
- action
- ttl
- nonce
- audience
Optionally:
- exec_hash
- policy id/version
