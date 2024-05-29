export default {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/what-is-inverter-network',
        'concepts/the-inverter-network-protocol',
        'concepts/use-cases',
        {
          type: 'category',
          label: 'Protocol Concepts',
          items: [
            {
              type: 'category',
              label: 'Workflow Model',
              items: [
                {
                  type: 'category',
                  label: 'Authorizer',
                  items: [
                    'concepts/protocol-concepts/workflow-model/authorizer/overview',
                    'concepts/protocol-concepts/workflow-model/authorizer/role-authorizer',
                    'concepts/protocol-concepts/workflow-model/authorizer/token-gated-role-authorizer',
                    'concepts/protocol-concepts/workflow-model/authorizer/single-vote-governance-module',
                  ],
                },
                {
                  type: 'category',
                  label: 'Funding Manager',
                  items: [
                    'concepts/protocol-concepts/workflow-model/funding-manager/overview',
                    'concepts/protocol-concepts/workflow-model/funding-manager/bonding-curve',
                    'concepts/protocol-concepts/workflow-model/funding-manager/rebasing-funding-manager',
                    'concepts/protocol-concepts/workflow-model/funding-manager/staking-manager',
                  ],
                },
                {
                  type: 'category',
                  label: 'Logic Module',
                  items: [
                    'concepts/protocol-concepts/workflow-model/logic-module/overview',
                    'concepts/protocol-concepts/workflow-model/logic-module/bounty-manager',
                    'concepts/protocol-concepts/workflow-model/logic-module/kpi-rewarder',
                    'concepts/protocol-concepts/workflow-model/logic-module/recurring-payment-manager',
                  ],
                },
                {
                  type: 'category',
                  label: 'Payment Processor',
                  items: [
                    'concepts/protocol-concepts/workflow-model/payment-processor/overview',
                    'concepts/protocol-concepts/workflow-model/payment-processor/simple-payment-processor',
                    'concepts/protocol-concepts/workflow-model/payment-processor/streaming-payment-processor',
                  ],
                },
              ],
            },
            'concepts/protocol-concepts/module-library',
            'concepts/protocol-concepts/primary-issuance-markets',
            'concepts/protocol-concepts/governance',
            {
              type: 'category',
              label: 'Security',
              items: [
                'concepts/protocol-concepts/security/security-guideline',
                'concepts/protocol-concepts/security/protocol-architecture',
                'concepts/protocol-concepts/security/testing',
                'concepts/protocol-concepts/security/audits',
                'concepts/protocol-concepts/security/intervention',
                'concepts/protocol-concepts/security/access-control',
              ],
            },
            'concepts/protocol-concepts/fees',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      items: [
        'SDK/api',
        'SDK/guides',
        'SDK/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Contracts',
      items: [
        'contracts/deployment-addresses',
        'contracts/security-guidelines',
        'contracts/technical-paper',
        'contracts/technical-reference',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/general-faq',
      ],
    },
  ],
};
