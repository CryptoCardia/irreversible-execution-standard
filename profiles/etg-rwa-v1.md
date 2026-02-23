
# ETG RWA Profile v1

## 1. Scope
This profile applies to issuance, redemption, and transfer of tokenized real-world assets (RWAs), including:
- tokenized debt/equity
- fund units
- real estate/commodity-backed tokens
- restricted transfer instruments

## 2. Intent Requirements
The Intent MUST include:
- intent.id
- type: "RWA_ISSUE" | "RWA_REDEEM" | "RWA_TRANSFER"
- asset_id (stable identifier)
- jurisdiction (ISO country code or legal region identifier)
- quantity
- counterparty identifier (address and/or legal entity id)
- compliance_context (opaque reference or hash)
- created_at

## 3. Binding Requirements
Authorization MUST bind to:
- asset_id
- quantity
- counterparty
- ttl
- nonce
- audience
Optionally:
- compliance_state_hash (recommended)

## 4. Enforcement Considerations
- If transfer restrictions exist, enforcement MUST validate them at execution.
- Where off-chain legal rules apply, compliance_context SHOULD be referenced by immutable identifier or hash.

## 5. Security Considerations
RWA flows are vulnerable to:
- jurisdictional misrouting
- bypassing transfer restrictions
- unauthorized issuance/redemption
- administrative key misuse

This profile emphasizes binding to asset identity, jurisdiction, and compliance context.
