module.exports = {
  docs: {
    'Getting Started': [
      'getting-started/intro',
      'getting-started/deploying-your-workflow',
      'getting-started/develop-a-module',
      'getting-started/start-learning',
      'getting-started/understanding-architecture',
    ],
    'Concepts': [
      'concepts/what-is-inverter-network',
      'concepts/use-cases',
      'concepts/protocol-concepts',
      'concepts/governance',
      'concepts/glossary',
    ],

     'Modules': [
      'modules/bounty-manager',
      'modules/kpi-rewarder',
      'modules/list-based-authorizer',
      'modules/token-gated-role-authorizer',
      'modules/rebasing-funding-manager',
      'modules/recurring-payment-manager',
      'modules/simple-payment-processor',
      'modules/single-vote-governance-module',
      'modules/streaming-payment-processor',
    ],

    'Contracts': [
      'contracts/overview',
      'contracts/SDK',
  
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
    'Apps': [
      'apps/overview',
      'apps/control-room',
    ],
    'FAQ': ['faq/general-faq', 'faq/technical-faq'],
  },
};
