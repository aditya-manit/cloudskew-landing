module.exports = {
  title: 'CloudSkew',
  description: 'Free online diagram editor for creating cloud architecture diagrams',
  themeConfig: {
    // logo: '/assets/cloudskew-logo.png',
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Login / Signup', link: 'https://app.cloudskew.com' },
      { text: 'Pricing', link: '' },
      { text: 'Status', link: '' },
      {
        text: 'About',
        ariaLabel: 'About menu',
        link: '/about',
        items: [
          {
            text: 'Product', items: [
              { text: 'Issues', link: 'https://github.com/cloudskew/cloudskew/issues' },
              { text: 'Privacy Policy', link: '/about/privacy-policy' },
              { text: 'Releases', link: 'https://github.com/cloudskew/cloudskew/releases' },
            ],
          },
          {
            text: 'Company', items: [
              { text: 'Contact Us', link: '/about/contact-us' },
            ],
          },


        ],
      },
    ]
  }
}