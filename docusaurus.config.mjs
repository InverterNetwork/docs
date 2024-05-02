// import { themes as prismThemes } from 'prism-react-renderer'

export default {
  title: 'Inverter Documentation',
  tagline: 'The hub for all Inverter protocol documentation.',
  favicon: 'img/favicon.ico',

  // Adjusted to point to the GitHub pages domain you should use for Inverter
  url: 'https://inverternetwork.github.io',
  baseUrl: '',

  // Adjusted organizationName to match your GitHub organization and projectName to your repository
  organizationName: 'InverterIetwork',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '',
          sidebarPath: './sidebars.mjs',
          // Adjusted to provide the correct link for editing documents
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
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
        // {
        //   type: 'doc',
        //   docId: 'getting-started/intro', // Ensure this ID matches your actual starting document ID in your docs
        //   position: 'left',
        //   label: 'Docs',
        // },
        {
          href: 'https://github.com/InverterNetwork',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
}
