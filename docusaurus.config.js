// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Inverter Documentation',
  tagline: 'The hub for all Inverter protocol documentation.',
  favicon: 'img/favicon.ico',

  url: 'https://www.inverter.network/',
  baseUrl: '/',

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
          editUrl: 'https://www.inverter.network/',
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
          docId: 'getting-started/intro', // Adjust the docId to point to the first document of your documentation.
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
