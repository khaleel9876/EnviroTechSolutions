export const updatePageMeta = ({ title, description, keywords, ogImage }) => {
  // Update title
  if (title) {
    document.title = title;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (twitterTitle) twitterTitle.setAttribute('content', title);
  }

  // Update description
  if (description) {
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    if (ogDesc) ogDesc.setAttribute('content', description);
    if (twitterDesc) twitterDesc.setAttribute('content', description);
  }

  // Update keywords
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
  }

  // Update OG image
  if (ogImage) {
    const ogImg = document.querySelector('meta[property="og:image"]');
    const twitterImg = document.querySelector('meta[property="twitter:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);
    if (twitterImg) twitterImg.setAttribute('content', ogImage);
  }
};

export const updateStructuredData = (schema) => {
  // Remove existing schema
  const existingSchema = document.querySelector('script[type="application/ld+json"]');
  if (existingSchema) {
    existingSchema.remove();
  }

  // Add new schema
  if (schema) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
};