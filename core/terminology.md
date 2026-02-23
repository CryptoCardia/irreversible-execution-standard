
# Terminology

This file defines the core terms used throughout IES/ETG.

## Defined Terms

- **Intent**: A structured declaration of a proposed execution event and its parameters.
- **Context**: Additional information used to evaluate risk and apply policy (identity, device, jurisdiction, account state, etc).
- **Risk Evaluation**: The process of generating signals (deterministic and/or probabilistic) about execution risk.
- **Risk Band**: A discrete category derived from risk evaluation (LOW, MEDIUM, HIGH).
- **Policy Decision**: A normative action derived from risk band and policy rules (ALLOW, STEP_UP, DENY).
- **Authorization Object (AO)**: A signed object that binds intent, decision, TTL, nonce, and audience.
- **Execution Binding**: A cryptographic linkage between authorization and the concrete execution parameters.
- **Finality**:
  - **Economic Finality**
  - **Cryptographic Finality**
  - **Legal Finality**

## Normative Keywords
The words MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY are normative and carry their usual standards meanings.
