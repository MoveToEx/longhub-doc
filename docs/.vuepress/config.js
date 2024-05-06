import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'en-US',

  title: 'LONG Doc',
  description: 'Document for LONG Hub',

  theme: defaultTheme({
    logo: '/images/logo.png',
    logoDark: '/images/logo-dark.png',

    navbar: [
      '/',
      {
        text: 'Guide',
        children: [
          '/guide/searching',
          '/guide/uploading',
          '/guide/metadata',
        ]
      },
      '/faq/',
      {
        text: 'API',
        children: [
          {
            text: 'Basic',
            children: [
              {
                text: 'Schema',
                link: '/api/schema'
              },
              {
                text: 'Authentication',
                link: '/api/authentication'
              }
            ],
          },
          {
            text: 'Endpoint',
            children: [
              {
                text: 'Post',
                link: '/api/post'
              },
              {
                text: 'Account',
                link: '/api/account'
              }
            ]
          },
        ]
      }
    ],
  }),

  bundler: webpackBundler(),
})
