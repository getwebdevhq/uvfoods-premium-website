import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export const SEOHead = ({ title, description, path = '', image = '/images/hero.png' }: SEOHeadProps) => {
  const baseUrl = 'https://uvfoods.in';
  const fullUrl = `${baseUrl}${path}`;
  const fullTitle = `${title} — UV Foods`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const updateMeta = (property: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', fullUrl, true);
    updateMeta('og:image', `${baseUrl}${image}`, true);
    updateMeta('og:type', 'website', true);
    updateMeta('twitter:title', fullTitle, true);
    updateMeta('twitter:description', description, true);
    updateMeta('twitter:image', `${baseUrl}${image}`, true);

    // JSON-LD structured data
    let script = document.querySelector('script[data-seo-ld]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-ld', 'true');
      document.head.appendChild(script);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'UV Foods Private Limited',
      url: baseUrl,
      logo: `${baseUrl}/vite.svg`,
      description: 'Modern food manufacturing and nutrition solutions built for institutional programs, public welfare, and sustainable impact across India.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chhata, Mathura',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@uvfoods.in',
        contactType: 'business inquiry',
      },
      sameAs: [],
      keywords: 'food manufacturing india, institutional nutrition supplier, fortified food manufacturing, government nutrition programs',
    };

    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup JSON-LD on unmount
      const existingScript = document.querySelector('script[data-seo-ld]');
      if (existingScript) existingScript.remove();
    };
  }, [fullTitle, description, fullUrl, image]);

  return null;
};
