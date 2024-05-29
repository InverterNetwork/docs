import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'e40'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b0b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '211'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c0e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '996'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd04'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c10'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'c2e'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '146'),
            routes: [
              {
                path: '/apps/control-room',
                component: ComponentCreator('/apps/control-room', '1b7'),
                exact: true
              },
              {
                path: '/apps/overview',
                component: ComponentCreator('/apps/overview', '535'),
                exact: true
              },
              {
                path: '/concepts/protocol-concepts/fees',
                component: ComponentCreator('/concepts/protocol-concepts/fees', '1e4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/governance',
                component: ComponentCreator('/concepts/protocol-concepts/governance', 'cb3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/module-library',
                component: ComponentCreator('/concepts/protocol-concepts/module-library', '718'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/primary-issuance-markets',
                component: ComponentCreator('/concepts/protocol-concepts/primary-issuance-markets', 'ed5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/security/access-control',
                component: ComponentCreator('/concepts/protocol-concepts/security/access-control', '54b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/security/audits',
                component: ComponentCreator('/concepts/protocol-concepts/security/audits', '145'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/security/intervention',
                component: ComponentCreator('/concepts/protocol-concepts/security/intervention', '790'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/security/protocol-architecture',
                component: ComponentCreator('/concepts/protocol-concepts/security/protocol-architecture', '816'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/security/security-guideline',
                component: ComponentCreator('/concepts/protocol-concepts/security/security-guideline', 'ec2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/security/testing',
                component: ComponentCreator('/concepts/protocol-concepts/security/testing', '014'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/authorizer/overview',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/authorizer/overview', 'cd6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/authorizer/role-authorizer',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/authorizer/role-authorizer', '701'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/authorizer/single-vote-governance-module',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/authorizer/single-vote-governance-module', '64c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/authorizer/token-gated-role-authorizer',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/authorizer/token-gated-role-authorizer', 'a97'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/funding-manager/bonding-curve',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/funding-manager/bonding-curve', '991'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/funding-manager/overview',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/funding-manager/overview', '077'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/funding-manager/rebasing-funding-manager',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/funding-manager/rebasing-funding-manager', '720'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/funding-manager/staking-manager',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/funding-manager/staking-manager', '31f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/logic-module/bounty-manager',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/logic-module/bounty-manager', '609'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/logic-module/kpi-rewarder',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/logic-module/kpi-rewarder', '3b0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/logic-module/overview',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/logic-module/overview', 'b25'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/logic-module/recurring-payment-manager',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/logic-module/recurring-payment-manager', 'e6d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/payment-processor/overview',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/payment-processor/overview', 'e75'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/payment-processor/simple-payment-processor',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/payment-processor/simple-payment-processor', 'ed6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts/workflow-model/payment-processor/streaming-payment-processor',
                component: ComponentCreator('/concepts/protocol-concepts/workflow-model/payment-processor/streaming-payment-processor', '8b1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/the-inverter-network-protocol',
                component: ComponentCreator('/concepts/the-inverter-network-protocol', '1bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/use-cases',
                component: ComponentCreator('/concepts/use-cases', '2a9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/what-is-inverter-network',
                component: ComponentCreator('/concepts/what-is-inverter-network', 'f84'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/deployment-addresses',
                component: ComponentCreator('/contracts/deployment-addresses', '242'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/security-guidelines',
                component: ComponentCreator('/contracts/security-guidelines', 'ee0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/technical-paper',
                component: ComponentCreator('/contracts/technical-paper', '7d5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/technical-reference',
                component: ComponentCreator('/contracts/technical-reference', 'f47'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/SDK/api',
                component: ComponentCreator('/SDK/api', 'adc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/SDK/guides',
                component: ComponentCreator('/SDK/guides', '32a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/SDK/quick-start',
                component: ComponentCreator('/SDK/quick-start', '64f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/support/general-faq',
                component: ComponentCreator('/support/general-faq', 'b02'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'e4a'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
