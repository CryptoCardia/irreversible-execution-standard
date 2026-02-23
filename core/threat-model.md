
# Threat Model (IES/ETG)

## Scope
This document enumerates structural threats to pre-execution control in irreversible systems.

Assumptions:
- Adversaries may control network transport.
- Adversaries may replay or mutate payloads.
- Concurrent execution attempts may occur.
- Policy state may evolve between authorization and execution.
- The model does NOT assume compromised signing keys unless explicitly stated.

## Threats and Mitigations

| Threat | Category | Primary Risk | Required Mitigations |
|---|---|---|---|
| Replay of Authorization Object | Tampering/Replay | Unauthorized repeat execution | Nonce + TTL + audience binding |
| Parameter mutation post-authorization | Tampering | Funds / state diverted | Intent hash + exec hash + canonicalization |
| Cross-domain replay | Spoofing | AO used on wrong rail/domain | Audience binding + domain-separated signing |
| Stale authorization | Elevation | Context changed but AO still valid | Strict TTL + optional state hash |
| Settlement race | DoS/Tamper | Concurrent bypass | Atomic nonce increment + idempotency |
| Oracle / data poisoning | Tampering | Incorrect risk/context | Deterministic guardrails + provenance |
| AI model manipulation | Tampering | False allow/deny | AI advisory only; deterministic policy authoritative |
| Key compromise | Spoofing/Elevation | Attacker signs valid AO | Key rotation, HSM, multi-sig, governance override |
| Governance takeover | Elevation | Policy edited to allow theft | Change control, multi-approver, audit trails |
| Logging suppression | Repudiation | No evidence post-incident | Write-once logs, external audit sink |

## Notes
This is a structural threat model. Implementations MUST perform system-specific threat modeling for their environment.
