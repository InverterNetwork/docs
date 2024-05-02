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
    component: ComponentCreator('/', '86d'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'c66'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'ab9'),
            routes: [
              {
                path: '/apps/control-room',
                component: ComponentCreator('/apps/control-room', 'fa6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/apps/overview',
                component: ComponentCreator('/apps/overview', 'ff6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/glossary',
                component: ComponentCreator('/concepts/glossary', 'c30'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/governance',
                component: ComponentCreator('/concepts/governance', '0e4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/concepts/protocol-concepts',
                component: ComponentCreator('/concepts/protocol-concepts', '53f'),
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
                path: '/contracts/build-contribute/development-workflow',
                component: ComponentCreator('/contracts/build-contribute/development-workflow', '926'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/build-contribute/guides',
                component: ComponentCreator('/contracts/build-contribute/guides', '630'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/build-contribute/overview',
                component: ComponentCreator('/contracts/build-contribute/overview', '4b6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/build-contribute/quick-start',
                component: ComponentCreator('/contracts/build-contribute/quick-start', '481'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/contracts/deployment-addresses',
                component: ComponentCreator('/contracts/contracts/deployment-addresses', 'e42'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/contracts/overview',
                component: ComponentCreator('/contracts/contracts/overview', '376'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/contracts/security',
                component: ComponentCreator('/contracts/contracts/security', 'efe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/contracts/technical-reference',
                component: ComponentCreator('/contracts/contracts/technical-reference', '115'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/overview',
                component: ComponentCreator('/contracts/overview', '782'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contracts/SDK',
                component: ComponentCreator('/contracts/SDK', 'd5d'),
                exact: true
              },
              {
                path: '/faq/general-faq',
                component: ComponentCreator('/faq/general-faq', '223'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/faq/technical-faq',
                component: ComponentCreator('/faq/technical-faq', '9b9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/deploying-your-workflow',
                component: ComponentCreator('/getting-started/deploying-your-workflow', '1a0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/develop-a-module',
                component: ComponentCreator('/getting-started/develop-a-module', '8e4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/start-learning',
                component: ComponentCreator('/getting-started/start-learning', 'b3a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/understanding-architecture',
                component: ComponentCreator('/getting-started/understanding-architecture', 'fdb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/authorizer/overview',
                component: ComponentCreator('/modules/authorizer/overview', 'e1d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/authorizer/role-authorizer',
                component: ComponentCreator('/modules/authorizer/role-authorizer', '17b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/authorizer/single-vote-governance-module',
                component: ComponentCreator('/modules/authorizer/single-vote-governance-module', 'e0b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/authorizer/token-gated-role-authorizer',
                component: ComponentCreator('/modules/authorizer/token-gated-role-authorizer', 'f17'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/funding-manager/bonding-curve',
                component: ComponentCreator('/modules/funding-manager/bonding-curve', 'a7c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/funding-manager/overview',
                component: ComponentCreator('/modules/funding-manager/overview', '701'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/funding-manager/rebasing-funding-manager',
                component: ComponentCreator('/modules/funding-manager/rebasing-funding-manager', 'e40'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/funding-manager/staking-manager',
                component: ComponentCreator('/modules/funding-manager/staking-manager', 'fd7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/logic-module/bounty-manager',
                component: ComponentCreator('/modules/logic-module/bounty-manager', '189'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/logic-module/kpi-rewarder',
                component: ComponentCreator('/modules/logic-module/kpi-rewarder', '025'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/logic-module/overview',
                component: ComponentCreator('/modules/logic-module/overview', '6ae'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/logic-module/recurring-payment-manager',
                component: ComponentCreator('/modules/logic-module/recurring-payment-manager', '9d5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/payment-processor/overview',
                component: ComponentCreator('/modules/payment-processor/overview', '86b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/payment-processor/simple-payment-processor',
                component: ComponentCreator('/modules/payment-processor/simple-payment-processor', 'a71'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/modules/payment-processor/streaming-payment-processor',
                component: ComponentCreator('/modules/payment-processor/streaming-payment-processor', '367'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/SDK/control-room',
                component: ComponentCreator('/SDK/control-room', 'dcd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/security/access-control',
                component: ComponentCreator('/security/access-control', '7c6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/security/audits',
                component: ComponentCreator('/security/audits', '91a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/security/intervention',
                component: ComponentCreator('/security/intervention', 'da5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/security/protocol-architecture',
                component: ComponentCreator('/security/protocol-architecture', '959'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/security/security-guideline',
                component: ComponentCreator('/security/security-guideline', '294'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/security/testing',
                component: ComponentCreator('/security/testing', 'd06'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'a08'),
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
