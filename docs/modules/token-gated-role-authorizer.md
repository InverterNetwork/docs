---
sidebar_position: 4
---

# Token Gated Role Authorizer
### Module Category: Authorizer

Token Gated Role Authorizer authorizes user access based on the possession of specified tokens.

Instead of whitelisting a user address, the whitelisted addresses will correspond to a token address, and on authorization the contract will check on ownership of one of the specified tokens.


# Module Functions:

### Parameters to set:

**Threshold:** Sets the minimum number of tokens an address must hold to qualify for a role.