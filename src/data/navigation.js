export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Testing Services', href: '/services/testing' },
      { name: 'Consultancy', href: '/services/consultancy' },
      { name: 'Waste Management', href: '/services/management' },
    ],
  },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Clients', href: '/clients' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];