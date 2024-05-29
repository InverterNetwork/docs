---
sidebar_position: 4
---

# Token Gated Role Authorizer

### Module Category: Authorizer

Token Gated Role Authorizer allows governing permissions for roles and access rights for contract interactions based on the ownership of specified tokens.

With Token Gated Role Authorizer, token addresses can be whitelisted for specific roles in addition to whitelisting a user or a contract address. Token based whitelisting gives all the holders of those tokens the relevant permissions. Token addresses can be ERC20, NFTs, or other token standards.

# Module Functions:

### Parameters to set:

**Role Setup:** Grant roles that are gated by token ownership.

**Token Specification:** Specifies which tokens are linked to the roles.

**Threshold:** Sets the minimum token balance required to access specific roles.
