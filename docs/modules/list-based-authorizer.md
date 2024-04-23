---
sidebar_position: 3
---

# List-based Role Authorizer
### Module Category: Authorizer

This module authorizes actions within Inverter Workflows, such as milestone declarations, contributor additions, or pausing orchestrator contracts, through a managed list of whitelisted addresses.

It provides an authorization framework that supports various governance structures, from individual EOAs to multi-signature wallets.


# Module Functions:

### Parameters to Set: 

**Address:** Wallet address to be added or removed from the authorization list.

### Interactions to Do:
**isAuthorized(address who):** Checks if the specified address is authorized to perform the current transaction.

**addToAuthorized(address who):** Adds an address to the authorization whitelist.

**removeFromAuthorized(address who):** Removes an address from the authorization whitelist.

**transferAuthorization(address to):** Transfers authorization from the caller to another address, effectively replacing them in the whitelist.
