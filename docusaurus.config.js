// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '瞬のノート',
  tagline: 'Learning Sharing Improving',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://note.syunn.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Thirup2', // Usually your GitHub org/user name.
  projectName: 'Note', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'zh-CN',
  //   locales: ['zh-CN'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Replace with your project's social card
      image: 'img/icon.png',
      navbar: {
        title: '瞬のノート',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'dropdown',
            label: '计算机基础',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'PL',
                label: '编程语言',
              },
              {
                type: 'docSidebar',
                sidebarId: 'DSA',
                label: '数据结构与算法',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Web 应用',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'Web_Language',
                label: '基本开发语言'
              },
            ],
          },

          {
            href: 'https://github.com/Thirup2/Note',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
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
                label: 'GitHub',
                href: 'https://github.com/Thirup2',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} | <a href="https://note.syunn.cn">NOTE.SYUNN.CN</a> | Built with Docusaurus<br /><a href="https://icp.gov.moe/?keyword=20233201" target="_blank" style="display: inline-block; vertical-align: middle;"><img src="/img/moeicp.ico" alt="moeicp.ico" style="display: inline-block; height: 1.3em; width: auto; vertical-align: middle;" />萌ICP备20233201号</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
