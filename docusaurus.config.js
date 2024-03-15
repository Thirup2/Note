// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');

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
  trailingSlash: true,

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
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
  
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

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
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: '编程语言',
            items: [
              // {
              //   type: 'docSidebar',
              //   sidebarId: 'C_Language',
              //   label: 'C 语言',
              // },
              {
                type: 'docSidebar',
                sidebarId: 'CPP_Language',
                label: 'C++',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '数据结构与算法',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'DSA_in_C',
                label: '数据结构与算法-C语言实现',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Web',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'Web_Basic',
                label: 'Web 基础',
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
            title: 'My Sites',
            items: [
              {
                label: '瞬のサイト',
                href: 'https://syunn.cn',
              },
              {
                label: '瞬のブログ',
                href: 'https://blog.syunn.cn',
              },
              {
                label: '瞬のノート',
                href: 'https://note.syunn.cn',
              },
            ],
          },
          // {
          //   title: 'Projects',
          //   items: [
          //     {
          //       label: 'CharsConvert',
          //       href: '#',
          //     },
          //     {
          //       label: 'ACNM',
          //       href: '#',
          //     },
          //   ],
          // },
          {
            title: 'Social',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/Thirup2',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email Me',
                href: 'mailto:master@syunn.cn',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/SyunnT'
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Node.js',
                href: 'https://nodejs.org/en',
              },
              {
                label: 'React',
                href: 'https://react.dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} | <a href="https://note.syunn.cn">NOTE.SYUNN.CN</a> | Built with Docusaurus<br /><a href="https://icp.gov.moe/?keyword=20233201" target="_blank" style="display: inline-block; vertical-align: middle;"><img src="/img/moeicp.ico" alt="moeicp.ico" style="display: inline-block; height: 1.3em; width: auto; vertical-align: middle;" />萌ICP备20233201号</a>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/nightOwlLight'),
        darkTheme: require('prism-react-renderer/themes/nightOwl'),
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'error-next-line',
            block: { start: 'error-start', end: 'error-end'},
          },
        ],
      },
    }),
};

module.exports = config;
