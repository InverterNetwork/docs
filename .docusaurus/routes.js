import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '850'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '192'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '140'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '68e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c04'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a7e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f74'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '079'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '8f9'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '77b'),
            routes: [
              {
                path: '/docs/apps/control-room',
                component: ComponentCreator('/docs/apps/control-room', '520'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/apps/overview',
                component: ComponentCreator('/docs/apps/overview', '019'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/glossary',
                component: ComponentCreator('/docs/concepts/glossary', '424'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/governance',
                component: ComponentCreator('/docs/concepts/governance', '8a1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/protocol-concepts',
                component: ComponentCreator('/docs/concepts/protocol-concepts', '9b6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/use-cases',
                component: ComponentCreator('/docs/concepts/use-cases', '2f5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/what-is-inverter-network',
                component: ComponentCreator('/docs/concepts/what-is-inverter-network', 'f1e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/build-contribute/development-workflow',
                component: ComponentCreator('/docs/contracts/build-contribute/development-workflow', '4e0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/build-contribute/guides',
                component: ComponentCreator('/docs/contracts/build-contribute/guides', '8b5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/build-contribute/overview',
                component: ComponentCreator('/docs/contracts/build-contribute/overview', 'fb2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/build-contribute/quick-start',
                component: ComponentCreator('/docs/contracts/build-contribute/quick-start', '259'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/contracts/deployment-addresses',
                component: ComponentCreator('/docs/contracts/contracts/deployment-addresses', '91a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/contracts/overview',
                component: ComponentCreator('/docs/contracts/contracts/overview', 'f46'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/contracts/security',
                component: ComponentCreator('/docs/contracts/contracts/security', '64f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/contracts/technical-reference',
                component: ComponentCreator('/docs/contracts/contracts/technical-reference', '69e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/overview',
                component: ComponentCreator('/docs/contracts/overview', '98f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/contracts/SDK',
                component: ComponentCreator('/docs/contracts/SDK', 'c19'),
                exact: true
              },
              {
                path: '/docs/faq/general-faq',
                component: ComponentCreator('/docs/faq/general-faq', 'aa5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/faq/technical-faq',
                component: ComponentCreator('/docs/faq/technical-faq', 'a7b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/deploying-your-workflow',
                component: ComponentCreator('/docs/getting-started/deploying-your-workflow', '733'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/develop-a-module',
                component: ComponentCreator('/docs/getting-started/develop-a-module', '1cb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/intro',
                component: ComponentCreator('/docs/getting-started/intro', 'd10'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/start-learning',
                component: ComponentCreator('/docs/getting-started/start-learning', '546'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/understanding-architecture',
                component: ComponentCreator('/docs/getting-started/understanding-architecture', 'b66'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'e84'),
                exact: true
              },
              {
                path: '/docs/modules/authorizer/overview',
                component: ComponentCreator('/docs/modules/authorizer/overview', '689'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/authorizer/role-authorizer',
                component: ComponentCreator('/docs/modules/authorizer/role-authorizer', 'ffe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/authorizer/single-vote-governance-module',
                component: ComponentCreator('/docs/modules/authorizer/single-vote-governance-module', '3e4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/authorizer/token-gated-role-authorizer',
                component: ComponentCreator('/docs/modules/authorizer/token-gated-role-authorizer', '1df'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/funding-manager/bonding-curve',
                component: ComponentCreator('/docs/modules/funding-manager/bonding-curve', '47a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/funding-manager/overview',
                component: ComponentCreator('/docs/modules/funding-manager/overview', 'e1c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/funding-manager/rebasing-funding-manager',
                component: ComponentCreator('/docs/modules/funding-manager/rebasing-funding-manager', 'eda'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/funding-manager/staking-manager',
                component: ComponentCreator('/docs/modules/funding-manager/staking-manager', '726'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/logic-module/bounty-manager',
                component: ComponentCreator('/docs/modules/logic-module/bounty-manager', '680'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/logic-module/kpi-rewarder',
                component: ComponentCreator('/docs/modules/logic-module/kpi-rewarder', '52d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/logic-module/overview',
                component: ComponentCreator('/docs/modules/logic-module/overview', 'ee6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/payment-processor/overview',
                component: ComponentCreator('/docs/modules/payment-processor/overview', '2b3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/payment-processor/recurring-payment-manager',
                component: ComponentCreator('/docs/modules/payment-processor/recurring-payment-manager', 'a4a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/payment-processor/simple-payment-processor',
                component: ComponentCreator('/docs/modules/payment-processor/simple-payment-processor', 'afe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/payment-processor/streaming-payment-processor',
                component: ComponentCreator('/docs/modules/payment-processor/streaming-payment-processor', '96f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/SDK/control-room',
                component: ComponentCreator('/docs/SDK/control-room', '250'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Security/access-control',
                component: ComponentCreator('/docs/Security/access-control', '46e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Security/audits',
                component: ComponentCreator('/docs/Security/audits', 'ff2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Security/intervention',
                component: ComponentCreator('/docs/Security/intervention', 'af2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Security/protocol-architecture',
                component: ComponentCreator('/docs/Security/protocol-architecture', '53a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Security/security-guideline',
                component: ComponentCreator('/docs/Security/security-guideline', '81d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Security/testing',
                component: ComponentCreator('/docs/Security/testing', '836'),
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
