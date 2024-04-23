---
sidebar_position: 5
id: understanding-architecture
title: Understanding The Architecture
---


# Architecture 

In this section, we describe the various smart contracts and their functionalities. Together with the general architecture and main interfaces, we also present the structure designed to accommodate future extensions of the overall architecture.

# Overview 

The goal of developing the Inverter Protocol is to create a programmable and versatile method for projects or protocols to coordinate the exchange of funds between parties in a flexible and extensible manner. Typically, this is done by organizing around a single wallet-like contract that holds the funds and is managed by a central group of trusted peers. This has a fundamental design limitation around scaling such a coordination system beyond this core group while maintaining security and flexibility.

Instead, we focus on creating a system that tracks relationships and permissions among various stakeholders who may not be part of a tightly defined group. We establish clear interaction points for every party or contract without giving complete control to a single entity. Setting these boundaries allows us to extend trust beyond just one interaction and cover the entire process. Let's take a moment to compare both approaches.

In a traditional multi-signature wallet, a trusted group of users comes together and sets rules to manage a shared pool of funds (often using an "x-out-of-y" signature approval model). Once the owners agree, the transfer of funds is carried out.

![Docusaurus Logo](/img/architecture1.png)


But this method reaches its limits when implementing more complex flows involving multiple parties and interactions. To address this, we split the system into different parts, which are set up together and linked through a common orchestrator contract. Users can deposit funds to a funding vault, issuing receipts and enforcing specific deposit rules. Logic modules can then manage these funds, which perform particular tasks with them. The parameters for these logic modules are determined by a group of addresses (usually the users who set up the system), but even they have clear limits on what they can change. Once funds are ready to leave the system, they are moved to a processing module, where user control is even more restricted.

![Docusaurus Logo](/img/architecture2.png)
