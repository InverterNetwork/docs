---
sidebar_position: 2
---

# Bonding Curve Bancor Funding Manager
### Module Category: Funding Manager

The Bonding Curve Bancor Funding Manager provides algorithmic pricing for minting & redeeming tokens. It enables dynamic pricing of tokens in response to their supply by utilizing the Bancor Formula. 

Projects can utilize this module to set a primary market for their assets without needing liquidity while benefiting from the native yield that primary markets unlock for tokens.

# Module Functionalities: 

### Parameters to set:

**Bonding Curve Formula:** The Bonding Curve shall utilize the Bancor formula to create two distinct bonding curves for funding to mint and burning to withdraw.

**Reserve Ratio for Buying/Selling:** Specifies two different exchange rates for buying and selling, effectively having two different curves.

**Buy and Sell Fee:** Projects can apply a fee to transactions in which tokens are bought and sold.
 
**Buying Open or Closed:** Controls whether tokens can be currently bought, allowing administrators to control the availability of their tokens. Tokens can be opened and closed to buying depending on the administrators’ decision. 

**Selling Open or Closed:** Controls whether tokens can be currently sold, allowing administrators to control the availability of their tokens. Tokens can be opened and closed to buying depending on the administrators’ decision. 

**Virtual Collateral/Token Supply:** Allows the use of virtual balances for backing collateral, thus making the collateral available to utilize for DeFi strategies or spending. 

**Minting & Redeeming:** Allows users to mint new tokens by providing collateral, with amounts determined by current bonding curve pricing. Users can also redeem tokens by burning them and returning the original deposit.

**Cap/Uncap Supply:** Sets the supply cap beyond which no further minting can occur.

**Permissioning:** Restricts the bonding curve to a whitelisted group of actors.



	

