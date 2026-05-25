import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  getBreadcrumbs,
  getSeoForPath
} from '../lib/seo';
import { applyHead, removeJsonLd } from '../lib/head';

export default function Seo() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/blog/') && pathname !== '/blog') {
    return null;
  }

  const seo = getSeoForPath(pathname);

  const title = seo.title || DEFAULT_TITLE;
  const description = seo.description || DEFAULT_DESCRIPTION;
  const canonicalPath = pathname === '/' ? '' : pathname;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    }
  };

  const breadcrumbs = getBreadcrumbs(pathname, SITE_URL);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };

  useEffect(() => {
    const robots = seo.noindex ? 'noindex, nofollow' : 'index, follow';

    applyHead({
      title,
      description,
      canonicalUrl,
      robots,
      ogType: 'website',
      jsonLd: [
        { id: 'org', data: organizationSchema },
        { id: 'site', data: websiteSchema },
        { id: 'page', data: webPageSchema },
        { id: 'breadcrumb', data: breadcrumbSchema }
      ]
    });

    return () => {
      removeJsonLd('org');
      removeJsonLd('site');
      removeJsonLd('page');
      removeJsonLd('breadcrumb');
    };
  }, [canonicalUrl, description, seo.noindex, title, pathname]);

  return null;
}
