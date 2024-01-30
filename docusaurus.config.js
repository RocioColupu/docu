// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://RocioColupu.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docu/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RocioColupu', // Usually your GitHub org/user name.
  projectName: 'docu', // Usually your repo name.

  deploymentBranch: 'gh-pages', // abrir la pagina
  trailingSlash: false, 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Rocio Colupu',
        logo: {
          alt: 'My Site Logo',
          src: 'data:image/png;base64,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',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          /*
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
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
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rocio Colupu Prado.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
