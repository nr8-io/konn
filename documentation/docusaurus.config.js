import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Konn',
  tagline: 'Introduce logic to your yaml through Konn',
  favicon: 'img/favicon.ico',
  url: 'https://nr8-io.github.io',
  baseUrl: '/konn/',
  organizationName: 'nr8-io',
  projectName: 'konn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nr8-io/konn/edit/main/website/',
        },
        blog: false,  // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Konn',
      logo: {
        alt: 'Konn Logo',
        src: 'img/konn.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro/intro',  // Make sure 'intro/intro' is a valid doc ID
          position: 'left',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'api/app/api-app-extend',  // Make sure this is a valid doc ID
          position: 'left',
          label: 'API Reference',
        },
        {
          type: 'doc',
          docId: 'tutorial/config',  // Make sure this is a valid doc ID
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/nr8-io/konn',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/nr8-io/konn',
          label: 'Discord-no-link-yet',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Konn',
              to: '/intro/intro',  // Ensure this path is valid
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nr8-io/konn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['yaml'],
    },
  },
};

export default config;