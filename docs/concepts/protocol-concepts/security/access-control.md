---
sidebar_position: 6
---

# Access Control and Permissions

### Governance and Protocol Upgrades

In our decentralized digital world, governance plays a pivotal role in steering the direction and ensuring the safety of the protocol. The Inverter Protocol aims to be a fundamentally community-driven platform. Our governance model reflects this ethos, aiming to protect users and ensure the protocol's long-term sustainability.

While we prioritize user protection and decentralization, we also recognize the need for efficient management. **We follow a dual multi-sig approach** to embody this balance, ensuring that the Inverter Protocol remains resilient, user-centric, and poised for future growth. While the primary multisig focuses on strategic and high-impact decisions, the secondary multisig ensures that the protocol's daily operations run smoothly and efficiently.

The Primary Multisig is entrusted with critical decisions over the protocol with the authority to approve critical on-chain upgrades and, if necessary, pause the entire system. This multisig comprises a diverse group, including members from the Inverter team, influential figures from other projects, community representatives, and advisors.

The Secondary Multisig is tailored for operational efficiency, and it handles day-to-day tasks such as managing the deployment/setup of new contracts, adding new modules to the whitelist, managing routine upgrades, and pausing specific modules if required. Exclusively consisting of Inverter team members, this multisig is more agile, facilitating swift decision-making.

### Protection Mechanisms for Live Contracts

- **TimeLock Mechanisms:** For contracts already deployed, we employ TimeLock contracts for major upgrades. This mechanism ensures that any significant change will only take effect after a predetermined waiting period, ranging from hours to days, depending on the severity of the change. Currently, it is set to a minimum of 2 days. This delay allows users to review and assess the changes, providing them an option to opt-out if they disagree with the modifications. While determining the waiting period, we'll consider the urgency of actions but will always prioritize user safety.
