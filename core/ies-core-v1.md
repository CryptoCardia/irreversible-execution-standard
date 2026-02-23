
# IES Core v1
## Irreversible Execution Standard (IES)

### 1. Abstract
Irreversible Execution Standard (IES) defines structural control requirements for systems in which execution events are economically, cryptographically, or legally irreversible.

IES applies to any system where post-execution detection is insufficient to prevent loss, and where pre-execution authorization can be programmatically controlled.

### 2. Scope
IES applies to Irreversible Execution Events including (non-exhaustive):

- Stablecoin transfers
- Tokenized securities issuance/settlement
- Real-world asset (RWA) issuance/redemption/transfer
- Custodial treasury disbursements
- Smart contract administrative actions (upgrades, role changes, parameter changes)
- Bridge mints/burns and cross-domain finality events

IES does NOT define specific risk models, AI systems, scoring weights, or institution-specific heuristics.

### 3. Definitions

#### 3.1 Irreversible Execution Event
An execution event after which rollback:
- is technically infeasible or impossible (Cryptographic Finality), OR
- requires economic restitution or compensatory transfer (Economic Finality), OR
- requires formal adjudication or regulatory/legal intervention (Legal Finality)

#### 3.2 Economic Finality
A state in which reversal requires compensatory payments, chargebacks, restitution, or negotiated repayment, typically with loss, delay, or disputes.

#### 3.3 Cryptographic Finality
A state in which protocol mechanics make reversal infeasible after confirmation/finalization, absent extraordinary intervention.

#### 3.4 Legal Finality
A state in which reversal requires legal or regulatory intervention (court orders, compliance enforcement, rescission, injunction).

#### 3.5 Control Surface
The decision boundary prior to execution at which authorization may be granted or denied.

### 4. Core Control Invariants (Normative)

For any Irreversible Execution Event, the following invariants MUST hold:

#### 4.1 Declared Intent
An **Intent** MUST be constructed prior to authorization.
The Intent MUST contain sufficient parameters to uniquely identify the execution outcome.

#### 4.2 Pre-Execution Risk Evaluation
Risk evaluation MUST occur prior to authorization.
Risk evaluation MAY include deterministic and probabilistic methods.
Probabilistic systems MUST NOT be solely authoritative for execution permission.

#### 4.3 Policy Determination
A **Policy Decision** MUST be derived from risk evaluation and contextual constraints.
The Policy Decision MUST resolve to one of:
- **ALLOW**
- **STEP_UP**
- **DENY**

#### 4.4 Authorization Binding
If execution is permitted, an **Authorization Object** MUST bind:
- the Intent (or Intent hash),
- the Policy Decision,
- a **TTL** (time-to-live),
- a **nonce** or replay-prevention mechanism,
- an **audience** or execution domain identifier.

#### 4.5 Replay Protection
Authorization MUST NOT be reusable beyond its intended scope.
Replay MUST be prevented via nonce + TTL or equivalent mechanisms.

#### 4.6 Enforcement at the Execution Surface
Execution infrastructure MUST verify the Authorization Object at the control surface immediately prior to execution/settlement.
If verification fails, execution MUST NOT proceed.

#### 4.7 Auditability
Risk evaluations and policy decisions MUST be:
- persistable,
- replayable (deterministically reproducible from stored inputs),
- attributable (tied to subject/principal and policy versioning).

### 5. Separation of Concerns
Systems satisfying IES SHOULD separate:
- risk computation,
- policy mapping,
- authorization issuance,
- execution enforcement.

No single probabilistic component SHOULD have unilateral execution authority.

### 6. Relationship to ETG
**Execution-Time Governance (ETG)** defines governance semantics and actions that satisfy IES invariants.
ETG is specified in `/core/etg-core-v1.md`.

### 7. Versioning
IES v1 defines structural invariants. Future versions MAY address:
- cross-institution interoperability,
- multi-rail composability,
- conformance mappings to regulatory standards.
