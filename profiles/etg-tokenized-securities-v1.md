
# ETG Tokenized Securities Profile v1

## 1. Scope
This profile applies to public or private securities represented digitally, including:
- tokenized shares
- tokenized bonds
- regulated ATS/venue settlement tokens

## 2. Intent Requirements
Intent MUST include:
- security_id (CUSIP/ISIN equivalent or issuer-defined)
- venue / settlement domain identifier
- quantity
- buyer/seller identifiers
- settlement_date (if applicable)
- jurisdiction
- created_at

## 3. Binding Requirements
Authorization MUST bind to:
- security_id
- venue / domain
- quantity
- counterparties
- ttl + nonce + audience

## 4. Enforcement Considerations
- Venue-specific constraints MUST be enforced at execution.
- Where legal finality is dominant, audit and attribution requirements are heightened.

## 5. Security Considerations
Common threats include:
- mis-settlement to wrong venue
- policy drift during settlement windows
- multi-party approval failure

This profile emphasizes domain binding and attribution.
