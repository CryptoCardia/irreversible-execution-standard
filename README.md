
# Irreversible Execution Standard (IES) v1

IES defines **structural control invariants** for systems where execution is **economically, cryptographically, or legally irreversible**.

This repository provides:

- **IES doctrine** (why irreversibility requires pre-execution control)
- **ETG governance semantics** (how to compute policy decisions before execution)
- **Bindings** to authorization artifacts and execution envelopes
- **Profiles** for common irreversible rails (stablecoins, RWAs, tokenized securities, treasury, contract admin)
- **Schemas, test vectors, and a minimal verifier reference**

> This is a standards-style specification. It intentionally avoids proprietary scoring weights, institution-specific heuristics, and implementation details.

## Finality types

IES covers three forms of finality:

- **Economic finality**: reversal is possible only via compensatory transfers or restitution.
- **Cryptographic finality**: protocol-level rollback is infeasible or impossible once confirmed/finalized.
- **Legal finality**: reversal requires adjudication, regulatory intervention, or formal legal process.

## Layering

IES is intentionally layered:

1. **IES Core**: control invariants for irreversible execution events
2. **ETG Core**: governance semantics (risk → policy action)
3. **Bindings**: how decisions/authorizations bind to execution artifacts
4. **Profiles**: rail-specific intent requirements and enforcement considerations

## Status

Version: **IES v1** (2026-02-23)

## Directory layout

See the folder structure in this repo:
- `/core` doctrine + semantics
- `/bindings` binding requirements
- `/profiles` rail profiles
- `/schemas` canonical JSON Schemas
- `/test-vectors` deterministic fixtures for implementers
- `/reference` minimal verifier and examples
- `/diagrams` reference visuals

## Normative language

The key words **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are to be interpreted as described in RFC 2119.
## Core docs

- IES Core: /core/ies-core-v1.md
- ETG Core: /core/etg-core-v1.md
- Canonicalization: /core/canonicalization.md
- Conformance: /core/conformance.md
- Interoperability: /core/interoperability.md
- Threat Model: /core/threat-model.md
