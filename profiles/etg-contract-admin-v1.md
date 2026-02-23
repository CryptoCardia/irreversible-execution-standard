
# ETG Contract Administration Profile v1

## 1. Scope
Applies to administrative actions that alter smart contract behavior:
- upgrades (proxy implementation changes)
- role grants/revokes
- parameter changes (fees, caps, allowlists)
- pause/unpause

## 2. Intent Requirements
Intent MUST include:
- target_contract
- admin_action type
- parameters (new impl address, role id, numeric param, etc.)
- chain_id
- created_at

## 3. Binding Requirements
Authorization MUST bind to:
- target_contract
- admin_action + parameters
- chain_id
- ttl + nonce + audience

## 4. Enforcement Considerations
- Enforcement SHOULD be on-chain (e.g., timelock, guarded executor) where possible.
- STEP_UP SHOULD require multi-approver or timelock.

## 5. Security Considerations
Admin actions represent extreme irreversibility and governance risk.
This profile prioritizes strong binding and multi-party controls.
