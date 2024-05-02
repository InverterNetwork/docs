// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Inverter Documentation',
  tagline: 'The hub for all Inverter protocol documentation.',
  favicon: 'img/favicon.ico',

  // Adjusted to point to the GitHub pages domain you should use for Inverter
  url: 'https://inverter-protocol.github.io',
  baseUrl: '/inverter-documentation/',

  // Adjusted organizationName to match your GitHub organization and projectName to your repository
  organizationName: 'inverter-protocol',
  projectName: 'inverter-documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Adjusted to provide the correct link for editing documents
          editUrl: 'https://github.com/inverter-protocol/inverter-documentation/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    image: 'img/in-logo-blue.png',
    navbar: {
      title: 'Inverter',
      logo: {
        alt: 'Inverter Logo',
        src: 'img/in-logo-blue.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/intro', // Ensure this ID matches your actual starting document ID in your docs
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/InverterNetwork',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
};

export default config;
