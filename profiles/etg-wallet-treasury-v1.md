
# ETG Wallet & Treasury Profile v1

## 1. Scope
Applies to custodial and non-custodial treasury actions:
- transfers from treasury wallets
- internal disbursements
- payroll/vendor payments
- sweeping between accounts

## 2. Intent Requirements
Intent MUST include:
- source account / wallet id
- destination
- amount + asset
- rail ("bank" | "card" | "eth" | etc.)
- created_at

## 3. Binding Requirements
Authorization MUST bind to:
- destination
- amount
- asset/rail
- ttl + nonce + audience

## 4. Enforcement Considerations
- For custody, the executor service is the enforcement point.
- For on-chain wallets, enforcement can be smart-contract-based.

## 5. Security Considerations
Treasury threats include:
- vendor invoice compromise (change of destination)
- agentic automation gone wrong
- high-velocity drains
