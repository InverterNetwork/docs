export default {
  docs: {
    'Getting Started': [
      'getting-started/intro',
      'getting-started/deploying-your-workflow',
      'getting-started/develop-a-module',
      'getting-started/start-learning',
      'getting-started/understanding-architecture',
    ],
    Concepts: [
      'concepts/what-is-inverter-network',
      'concepts/use-cases',
      'concepts/protocol-concepts',
      'concepts/governance',
      'concepts/glossary',
    ],
    Modules: [
      {
        type: 'category',
        label: 'Authorizer',
        items: [
          'modules/authorizer/overview',
          'modules/authorizer/role-authorizer',
          'modules/authorizer/token-gated-role-authorizer',
          'modules/authorizer/single-vote-governance-module',
        ],
      },
      {
        type: 'category',
        label: 'Funding Manager',
        items: [
          'modules/funding-manager/overview',
          'modules/funding-manager/bonding-curve',
          'modules/funding-manager/rebasing-funding-manager',
          'modules/funding-manager/staking-manager',
        ],
      },
      {
        type: 'category',
        label: 'Logic Module',
        items: [
          'modules/logic-module/overview',
          'modules/logic-module/bounty-manager',
          'modules/logic-module/kpi-rewarder',
        ],
      },

      {
        type: 'category',
        label: 'Payment Processor',
        items: [
          'modules/payment-processor/overview',
          'modules/payment-processor/simple-payment-processor',
          'modules/payment-processor/recurring-payment-manager',
          'modules/payment-processor/streaming-payment-processor',
        ],
      },
    ],
    SDK: ['SDK/control-room'],
    Contracts: [
      'contracts/overview',
      {
        type: 'category',
        label: 'Build/Contribute',
        items: [
          'contracts/build-contribute/quick-start',
          'contracts/build-contribute/overview',
          'contracts/build-contribute/development-workflow',
          'contracts/build-contribute/guides',
        ],
      },
      {
        type: 'category',
        label: 'Contracts',
        items: [
          'contracts/contracts/overview',
          'contracts/contracts/deployment-addresses',
          'contracts/contracts/security',
          'contracts/contracts/technical-reference',
        ],
      },
    ],
    Apps: ['apps/overview', 'apps/control-room'],
    'Security Standard': [
      // Corrected spelling from "Standart" to "Standard"
      'Security/security-guideline',
      'Security/protocol-architecture',
      'Security/testing',
      'Security/audits',
      'Security/intervention',
      'Security/access-control',
    ],
    FAQ: ['faq/general-faq', 'faq/technical-faq'],
  },
}
