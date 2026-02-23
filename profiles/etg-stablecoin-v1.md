
# ETG Stablecoin Profile v1

## 1. Scope
This profile applies to irreversible transfers of stablecoins (fiat-pegged or asset-backed tokens), including:
- ERC-20 transfers
- mint/burn flows when governed by an issuer
- transferFrom flows initiated by agents/services

## 2. Intent Requirements
The Intent MUST include:
- intent.id
- type: "STABLECOIN_TRANSFER" | "STABLECOIN_MINT" | "STABLECOIN_BURN"
- chain_id
- token_address
- from (if applicable)
- to
- amount
- created_at (timestamp)

## 3. Binding Requirements
Authorization MUST bind to:
- chain_id
- token_address
- to
- amount
- nonce
- ttl
- audience

## 4. Enforcement Considerations
- Enforcement MUST verify AO at the execution surface (contract, relayer, or custody system).
- exec_hash SHOULD cover (chain_id, token_address, to, amount) at minimum.

## 5. Security Considerations
Stablecoin transfers are frequently targeted by:
- social engineering leading to misdirected "to" address
- address poisoning and lookalike recipients
- replay and relayer substitution

This profile prioritizes strong binding to recipient and amount.
