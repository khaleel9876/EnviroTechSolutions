export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EnviroTech Solutions',
  description: 'Environmental testing, consultancy, and waste management services',
  url: 'https://envirotech-solutions.com',
  logo: 'https://envirotech-solutions.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-80-2345-6789',
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 45, Industrial Estate, Peenya 2nd Stage',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560058',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://linkedin.com/company/envirotech-solutions',
    'https://twitter.com/envirotech_sol',
    'https://facebook.com/envirotechsolutions',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '250',
  },
});

export const getServiceSchema = (serviceName) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'Organization',
    name: 'EnviroTech Solutions',
    url: 'https://envirotech-solutions.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Environmental Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
        },
      },
    ],
  },
});