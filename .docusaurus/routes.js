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
    component: ComponentCreator('/docs', '01b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a0b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c2c'),
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
                component: ComponentCreator('/docs/contracts/SDK', '9f8'),
                exact: true,
                sidebar: "docs"
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
                path: '/docs/modules/bounty-manager',
                component: ComponentCreator('/docs/modules/bounty-manager', '55c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/kpi-rewarder',
                component: ComponentCreator('/docs/modules/kpi-rewarder', 'e99'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/list-based-authorizer',
                component: ComponentCreator('/docs/modules/list-based-authorizer', '107'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/rebasing-funding-manager',
                component: ComponentCreator('/docs/modules/rebasing-funding-manager', 'aa3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/recurring-payment-manager',
                component: ComponentCreator('/docs/modules/recurring-payment-manager', 'd62'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/simple-payment-processor',
                component: ComponentCreator('/docs/modules/simple-payment-processor', 'ed1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/single-vote-governance-module',
                component: ComponentCreator('/docs/modules/single-vote-governance-module', '17a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/streaming-payment-processor',
                component: ComponentCreator('/docs/modules/streaming-payment-processor', 'd48'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/modules/token-gated-role-authorizer',
                component: ComponentCreator('/docs/modules/token-gated-role-authorizer', 'b40'),
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
