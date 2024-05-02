---
sidebar_position: 5
---

# Intervention Mechanisms

In the dynamic landscape of blockchain-based projects, the ability to swiftly respond to emerging threats is crucial. Our protocol is equipped with mechanisms that allow:

- **Selective Pausing:** We can temporarily halt specific sections of contracts, ensuring that only the affected components are paused while the rest of the system remains operational. The pause can be limited to just a certain module or a small set of modules working together. This feature allows for more precise and targeted responses to potential threats or issues, thereby minimizing disruption to the entire system.

- **Full System Pause:** While we prioritize selective pausing, the protocol is designed to enable a complete system halt if necessary. This would be done in extreme circumstances where a catastrophic bug has either been discovered or is found to be actively being exploited. If the bug exists on a module that is frequently used in a different array of workflows, Inverter Network intends to implement an Inverter-Level Pausing, where the Inverter Network pushes out a minor update to each and every Inverter module, which pauses all the contracts, until newly patched and tested contract is re-deployed as another minor update.

- **User Choice:** It's important to note that all pausing or circuit-breaking mechanisms come with an opt-out option. Some users or use cases might opt for an immutable workflow, where pausing is not an option. In this scenario, users would be responsible for making the necessary upgrades themselves by following the guidelines that Inverter will release.

Users might also make the module changes in a specific workflow subject to a timelock, ensuring some security guarantees for all the participants in that workflow.

### Monitoring and Alerts

To maintain a real-time pulse on the protocol's operations and potential threats, we're integrating a state-of-the-art monitoring system akin to [OpenZeppelin Defender 2.0.](https://docs.openzeppelin.com/defender/v2/) This system will feature:

- **War Room:** A dedicated space where our team can monitor activities, detect anomalies, and strategize responses in real-time.

- **Alert Mechanisms:** Any unusual or potentially malicious activity will trigger instant alerts, ensuring that our team is always informed and ready to act.
