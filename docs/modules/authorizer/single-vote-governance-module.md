---
sidebar_position: 7
---

# Single Vote Governance Module

### Module Category: Authorizer

Single Vote Governance Module implements a threshold-based voting system for authorizing smart contract functions. It holds a list of authorized addresses that can initiate votes. Other addresses can support or reject these votes, which remain open for a specified period.

Each address is allowed only one vote, and votes cannot be modified. If a vote does not reach a quorum by the end of the voting period, it cannot be executed later, even if the quorum is later lowered. Actions related to the votes can only be executed after the voting period ends, even if the quorum was reached earlier.

# Module Functionalities:

### Parameters to Set:

**Addresses:** Voting addresses to be added or removed.

**Threshold:** The threshold number of votes required to execute an action.

### Interactions to Do:

**isAuthorized(address who):** Checks if the address is authorized to perform the current transaction.

**createMotion(address target, bytes action):** Initiates a new motion for voting.

**executeMotion(uint motionId):** Executes the action described in a motion once the vote threshold
is reached.

**addVoter(address):** Enlists a new address to participate in the voting process.

**removeVoter(address):** Disqualifies an address from the voting list.

**castVote(motionId, vote):** Registers a vote on a motion by an authorized address.

**threshold():** Retrieves the current vote threshold required for motion execution.

**setThreshold(uint):** Sets a new vote threshold necessary for executing actions.
