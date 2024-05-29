---
sidebar_position: 7
---

# Streaming Payment Processor

### Module Category: Payment Processor

The Streaming Payment Processor enables streaming assets to recipients with cliff and vesting options.

It provides a vested payment option for modules that facilitate the transfer of funds or issuance of assets to a set of addresses when certain conditions are met. It offers the flexibility in choosing custom cliff and vesting terms. Unvested streams can be stopped while the recipients are guaranteed to claim their already vested assets.

# Module Functionalities:

### Parameters to Set:

**Cliff duration:** Sets a time period that has to pass before the vested assets can be claimed.

**Vesting Duration:** Sets the exact date and time for vesting. This determines when tokens can be fully claimed.

# Module Interactions:

### For Administrators

**Remove Payment:** Cancels payment for a specific recipient, transferring any unlocked funds to the recipient before removal.

**Cancel Running Payments:** Cancels all payments associated with a particular payment client, affecting all recipients.

### For Claimers

**Claim Vests:** Enables users to claim vested assets for all the recipients, or to claim vested assets for a specific recipient.
