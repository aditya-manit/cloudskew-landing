module.exports = {
  title: 'CloudSkew',
  description: 'Draw AWS, Azure, GCP, Kubernetes diagrams for free (icons included)',
  head: [
    ['link', { rel: 'icon', href: `/assets/cloudskew-logo.png` }], // favicon
  ],
  plugins: {
    'vuepress-plugin-container': {
      type: 'tip',
      defaultTitle: {
        '/': 'Note',
      },
    },
    '@vuepress/back-to-top': {
    },
    '@vuepress/medium-zoom': {
    },
    '@vuepress/google-analytics': {
      'ga': 'UA-96116826-3' // google analytics tracking id
    },
    'sitemap': {
      'hostname': 'https://www.cloudskew.com',
      'exclude': [
        '/articles/cross-cutting-concerns-for-cloud-architectures.html', // @todo: temporary, remove later
      ],
    },
  },
  themeConfig: {
    logo: '/assets/cloudskew-logo.png',

    // disable the prev, next links (they're annoying & distracting)
    prevLinks: false,
    nextLinks: false,

    nav: [
      { text: 'Samples', link: '/docs/samples' },
      { text: 'Pricing', link: '/docs/pricing' },
      { text: 'Docs', link: '/docs/frequently-asked-questions' },
      // { text: 'Articles', link: '/articles/cross-cutting-concerns-for-cloud-architectures' },
      // { text: 'Case Studies', link: '/case-studies/frequently-asked-questions' },
      { text: 'Go To App', link: 'https://app.cloudskew.com' },
      { text: 'Status', link: '/status/current-status' },
      { text: 'Blog', link: 'https://blog.cloudskew.com' },
      {
        text: 'About',
        ariaLabel: 'About menu',
        link: '/about',
        items: [
          {
            items: [
              { text: 'Attribution', link: '/about/attribution' },
              { text: `CloudSkew Architecture`, link: '/about/cloudskew-architecture' },
              { text: 'Professional Services', link: '/about/professional-services' },
            ],
          },
          {
            items: [
              { text: 'Privacy Policy', link: '/about/privacy-policy' },
              { text: 'Terms of Service', link: '/about/terms-of-service' },
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
              { text: 'GitHub', link: 'https://github.com/cloudskew/cloudskew' },
              { text: 'Twitter', link: 'https://twitter.com/mithunshanbhag' },
              { text: 'YouTube', link: 'https://www.youtube.com/channel/UCc4Y5F4UcCl-KoNskDqdW6w' },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/about/': getAboutSidebar(),
      '/articles/': getArticlesSidebar(),
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
        'cloudskew-architecture',
        'privacy-policy',
        'professional-services',
        'terms-of-service',
      ],
    },
  ]
}

function getArticlesSidebar() {
  return [
    {
      title: 'Articles',
      collapsable: false,
      children: [ // please keep this list alphabetically sorted
        'cross-cutting-concerns-for-cloud-architectures',
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
        'keyboard-shortcuts',
        'pricing',
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