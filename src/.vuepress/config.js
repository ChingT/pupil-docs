const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = {
  title: "Pupil Labs",
  description: "Pupil Labs - We build state of the art eye tracking hardware and software. \
                We work hard to bring research ideas out of the lab and into the real world.",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: "Last Updated",
    sidebar: {
      '/invisible/': [
        '',
        {
          title: 'Getting Started',
          children: [
            'getting-started/capture-walkthrough',
            'getting-started/capture-workflow',
            'getting-started/player-walkthrough',
            'getting-started/player-workflow',
          ]
        },
      ],
      '/core/': [
        '',
      ],
      '/vr-ar/': [
        '',
      ],
      '/cloud/': [
        '',
      ],
      '/developer/': [
        '',
      ],
    },
    sidebarDepth: 2,
    repo: 'https://github.com/pupil-labs/pupil-docs-website',
    repoLabel: 'See on Github',
    docsRepo: 'https://github.com/pupil-labs/pupil-docs',
    docsDir: 'src',
    docsBranch: 'vuepress-refactor',
    editLinks: true,
    editLinkText: 'Edit this page!',
  },

  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          var date = new Date(timestamp);
          var yy = date.getFullYear();
          var mm = ("0" + (date.getMonth() + 1)).slice(-2);
          var dd = ("0" + date.getDate()).slice(-2);
          return `${yy}-${mm}-${dd}`;
        }
      }
    ],


    // [
    //   "@vuepress/google-analytics",
    //   {
    //     ga: "UA-40856943-2"
    //   }
    // ]
  ],
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  },
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()]
  },


}