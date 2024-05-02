---
sidebar_position: 1
---

Certainly! Here's the full documentation content for integrating the Inverter Network SDK into your project, formatted as a single markdown section suitable for Docusaurus:

````markdown
# Inverter Network SDK Integration Guide

This guide provides detailed documentation on integrating the Inverter Network SDK into your project. It covers the initialization process, interacting with smart contracts, and utilizing the SDK's functions to manage modules within the Inverter Network. Our SDK simplifies the integration of Inverter Network's functionalities into applications by abstracting direct interactions, allowing developers to focus on building robust features.

## Initializing the Workflow

### Setup

To initiate the SDK workflow, import the necessary modules and functions. Here’s how you can set up your environment:

```javascript
import getWorkflow from '../src/getWorkflow'
import { getTestConnectors } from './getTestConnectors'

// `getWorkflow` initializes instances of various components within the module.
// `getTestConnectors` provides mocked test instances of clients required by the workflow.
```
````

### Initial Configuration

Configure the workflow with the initial setup, including the orchestrator address and module configurations:

```javascript
const { publicClient, walletClient } = getTestConnectors()
const {
  logicModule,
  authorizer,
  fundingManager,
  paymentProcessor,
  erc20Module,
} = await getWorkflow({
  publicClient, // Viem's public client instance
  walletClient, // Viem's wallet client instance
  orchestratorAddress: '0xAC7f5C238d3BEdF5510a84dBEDB8db342E2e7320',
  workflowOrientation: {
    authorizer: {
      name: 'RoleAuthorizer',
      version: 'v1.0',
    },
    // Include logicModule, fundingManager, paymentProcessor as per requirement
  },
})
```

## Understanding DTOs

Each module returns a Data Transfer Object (DTO) Type with a structure that encompasses name, version, address, moduleType, description, and operations like read, simulate, and optionally write (if a wallet client is present). These DTOs standardize the interaction with the SDK, ensuring consistent data handling across different modules.

## Examples

### Logic Module - Get Bounty Information

To fetch bounty information, use the `getBountyInformation` method from the logicModule. This method exemplifies how inputs are passed and outputs are structured in the SDK:

```javascript
// Fetching bounty information
const res = await logicModule.read.getBountyInformation.run('51')
// Response is structured according to JS/TS standards:
// res: {
//   minimumPayoutAmount: string;
//   maximumPayoutAmount: string;
//   details: any; // Details are formatted similarly to their submission format
//   locked: boolean;
// }
```

### Logic Module - Add Bounty

Adding a bounty showcases how to execute a transaction and handle its response:

```javascript
// Adding a bounty
const res = await logicModule.write.addBounty.run([
  '100',
  '2000',
  ['this is an inverter project'],
])
// The response is a transaction hash (Hex):
// res: `0x${string}`
```
