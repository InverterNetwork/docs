---
sidebar_position: 2
---

# Bounty Manager

### Module Category: Logic Module

The Bounty Manager sets up and manages different bounties and processes payouts upon verification.

Bounty Manager enables an autonomous payout system with conditional verification. Each role in the Bounty Manager, from the administrators to the verifiers and addresses who are eligible to submit bounties, can be limited to a set of whitelisted addresses or token holders.

# Module Interactions:

### For Bounty Administrators:

**Create a Bounty:** Creates new bounties by specifying the bounty details and the minimum/maximum payout amounts.

**Bounty Details:** Data related to tasks, requirements, or other relevant information for a specific bounty.

**Minimum Payout:** The minimum amount of tokens the Bounty will pay out upon being claimed.

**Maximum Payout:** The maximum amount of tokens the Bounty will pay out upon being claimed.

**Lock Bounty:** Closes a bounty to new submissions after one successful payout. This type of bounty is for a one-time task. If a bounty is not locked, multiple payouts can be made for the same bounty.

**Grant Admin Roles:** Grants or revokes administrative roles to or from addresses.

### For Bounty Submitters:

**Submit and Update Claim:** Submits and update a claim for a bounty, including contributor address and details such as links to the completed work.

**Add and Edit Contributors:** Set or update the wallet address and token amount for each participant who can claim the bounty.

### For Bounty Verifiers:

**Verify Claim:** Approves or rejects bounty claims, upon which payout can happen.
