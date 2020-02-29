module.exports = {
  title: 'CloudSkew',
  description: 'Free online diagram editor for creating cloud architecture diagrams',
  head: [
    ['link', { rel: 'icon', href: `/assets/cloudskew-logo.png` }],
  ],
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
  ],
  themeConfig: {
    // logo: '/assets/cloudskew-logo.png',

    // disable the prev, next links (they're annoying & distracting)
    prevLinks: false,
    nextLinks: false,

    nav: [
      // { text: 'Blog', link: '/blog/' },
      { text: 'Samples', link: '/docs/samples' },
      { text: 'Docs', link: '/docs/frequently-asked-questions' },
      { text: 'Login / Signup', link: 'https://app.cloudskew.com' },
      // { text: 'Pricing', link: '' },
      { text: 'Status', link: '/status/current-status' },
      {
        text: 'About',
        ariaLabel: 'About menu',
        link: '/about',
        items: [
          {
            items: [
              { text: 'Attribution', link: '/about/attribution' },
              { text: 'Privacy Policy', link: '/about/privacy-policy' },
            ],
          },
          {
            items: [
              { text: 'Issues', link: 'https://github.com/cloudskew/cloudskew/issues' },
              { text: 'Release Notes', link: 'https://github.com/cloudskew/cloudskew/releases' },
            ],
          },
          {
            text: 'Contact Us',
            items: [
              { text: 'Email', link: 'mailto:support@cloudskew.com' },
              { text: 'Github', link: 'https://github.com/cloudskew/cloudskew' },
              { text: 'Twitter', link: 'https://twitter.com/mithunshanbhag' },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/about/': getAboutSidebar(),
      '/docs/': getDocsSidebar(),
      '/status/': getStatusSidebar(),
    },

  }
}

function getAboutSidebar() {
  return [
    {
      title: 'About',
      collapsable: false,
      children: [ // please keep this list alphabetically sorted
        'attribution',
        'privacy-policy',
      ],
    },
  ]
}

function getDocsSidebar() {
  return [
    {
      title: 'Docs',
      collapsable: false,
      children: [ // please keep this list alphabetically sorted
        'features',
        'frequently-asked-questions',
        'samples',
      ],
    },
  ]
}

function getStatusSidebar() {
  return [
    {
      title: 'Status',
      collapsable: false,
      children: [ // please keep this list alphabetically sorted
        'current-status',
        'past-incident-reports',
      ],
    },
  ]
}