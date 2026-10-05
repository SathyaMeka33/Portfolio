import { useEffect } from 'react';
import { PageMetadata, getAbsoluteUrl, PERSONAL_SEO } from '../config/seo';

interface SEOHeadProps {
  metadata: PageMetadata;
  structuredData?: object | object[];
}

export default function SEOHead({ metadata, structuredData }: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = metadata.title;

    // Helper to create or update meta tag
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', metadata.description);
    setMetaTag('name', 'robots', metadata.noIndex ? 'noindex, nofollow' : 'index, follow');

    // 3. Canonical Link
    const canonicalHref = getAbsoluteUrl(metadata.canonicalPath);
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    // 4. Open Graph Tags
    const ogImageUrl = metadata.ogImage ? getAbsoluteUrl(metadata.ogImage) : getAbsoluteUrl('/og-image.png');
    setMetaTag('property', 'og:type', metadata.ogType || 'website');
    setMetaTag('property', 'og:title', metadata.title);
    setMetaTag('property', 'og:description', metadata.description);
    setMetaTag('property', 'og:url', canonicalHref);
    setMetaTag('property', 'og:site_name', 'Sathya Meka Portfolio');
    setMetaTag('property', 'og:image', ogImageUrl);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', metadata.title);
    setMetaTag('name', 'twitter:description', metadata.description);
    setMetaTag('name', 'twitter:image', ogImageUrl);

    // 6. JSON-LD Structured Data
    // Default Person schema
    const defaultPersonSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: PERSONAL_SEO.fullName,
      alternateName: PERSONAL_SEO.preferredName,
      jobTitle: PERSONAL_SEO.role,
      email: PERSONAL_SEO.email,
      url: getAbsoluteUrl('/'),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rajahmundry',
        addressRegion: 'Andhra Pradesh',
        addressCountry: 'India',
      },
      sameAs: [
        PERSONAL_SEO.social.github,
        PERSONAL_SEO.social.linkedin,
        PERSONAL_SEO.social.leetcode,
      ],
      alumniOf: PERSONAL_SEO.alumniOf.map((school) => ({
        '@type': 'EducationalOrganization',
        name: school.name,
      })),
      knowsAbout: [
        'Data Structures',
        'Algorithms',
        'Python',
        'Java',
        'JavaScript',
        'React.js',
        'Django',
        'SQL',
        'PostgreSQL',
      ],
    };

    const schemasToInject = structuredData
      ? Array.isArray(structuredData)
        ? [defaultPersonSchema, ...structuredData]
        : [defaultPersonSchema, structuredData]
      : [defaultPersonSchema];

    // Remove existing dynamic json-ld scripts
    const existingScripts = document.querySelectorAll('script[data-dynamic-seo="true"]');
    existingScripts.forEach((script) => script.remove());

    schemasToInject.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-seo', 'true');
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    });
  }, [metadata, structuredData]);

  return null;
}
