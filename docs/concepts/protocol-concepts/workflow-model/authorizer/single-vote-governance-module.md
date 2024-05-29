---
sidebar_position: 7
---

# Single Vote Governance Module

### Module Category: Authorizer

Single Vote Governance Module implements a threshold-based voting system for authorizing smart contract functions. It holds a list of authorized addresses that can initiate votes. Other addresses can support or reject these votes, which remain open for a specified period.

Each address is allowed only one vote, and votes cannot be modified. If a vote does not reach a quorum by the end of the voting period, it cannot be executed later, even if the quorum is later lowered. Actions related to the votes can only be executed after the voting period ends, even if the quorum was reached earlier.

# Module Functionalities:

### Parameters to Set:

**Starting Quorum:** Defines the minimum percentage of eligible voters required to participate in a vote for it to be valid.

**Voting Duration:** Specifies the duration for which a vote remains open, allowing voters to cast their decisions. 

**Authorized Voters List:** Sets a list of addresses authorized to participate in governance activities. 
