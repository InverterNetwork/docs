---
sidebar_position: 3
---

# KPI Rewarder 
### Module Category: Logic Module


KPI Rewarder allows dynamic payments based on on/off-chain KPIs set by the project. It leverages UMA’s Optimistic Oracle to verify the KPI data. 

KPI Rewarder checks and validates KPIs, generates payment orders, and manages the distribution of those payments. It enables the distribution of payments or rewards according to defined performance outcomes. 


# Modules Functionalities
## Parameters to set: 

### KPI-Based Payment Parameters

**Reward Structure:** Supports various reward structures, including proportional payouts and tiered rewards. These structures can be adjusted based on total value locked or specific performance metrics, allowing for flexibility in reward distribution.


**Maximum Payout:** Sets the upper limit on rewards for a given period.

**Recurring Query Periods:** Defines the recurring period for the KPIs to be checked with the Oracle.


### UMA Oracle Parameters

**Bonding Amount:** Sets the bonding amount for each query, which is collateral required to secure an Oracle query within the UMA system.

**Recurring Query Periods:** Specifies the intervals at which the system will automatically ask the UMA Oracle for KPI evaluations.

**Maximum Payout:** Sets the maximum payout limit for each period, which helps control the disbursement of rewards.


### Automated Module Interactions:

**Oracle Queries:** Periodically queries the UMA Oracle to retrieve KPI data, which it then uses to determine the reward payout amount.

**Payment Order Generation:** Based on the results from the UMA Oracle, the module generates Payment Orders. These orders are determined by whether the Oracle's responses are binary (Yes/No), numerical, or address-based, affecting how rewards are calculated and distributed.

**Dispute Management:** In case of disputes in Oracle responses, the module holds the payment until the dispute is resolved.
