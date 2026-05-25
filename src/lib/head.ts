import { SITE_NAME } from './seo';

type JsonLdEntry = {
  id: string;
  data: unknown;
};

type HeadConfig = {
  title: string;
  description: string;
  canonicalUrl: string;
  robots?: string;
  ogType?: string;
  jsonLd?: JsonLdEntry[];
};

const META_NAME_KEYS = ['description', 'robots', 'twitter:card', 'twitter:title', 'twitter:description'];
const META_PROPERTY_KEYS = ['og:site_name', 'og:title', 'og:description', 'og:url', 'og:type'];

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonicalLink(href: string) {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export function setJsonLd(id: string, data: unknown) {
  const selector = `script[data-jsonld="${id}"]`;
  let element = document.head.querySelector(selector) as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-jsonld', id);
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

export function removeJsonLd(id: string) {
  const selector = `script[data-jsonld="${id}"]`;
  const element = document.head.querySelector(selector);
  if (element) {
    element.remove();
  }
}

export function applyHead(config: HeadConfig) {
  document.title = config.title;
  setCanonicalLink(config.canonicalUrl);

  setMetaTag('name', 'description', config.description);
  setMetaTag('name', 'robots', config.robots ?? 'index, follow');
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', config.title);
  setMetaTag('name', 'twitter:description', config.description);

  setMetaTag('property', 'og:site_name', SITE_NAME);
  setMetaTag('property', 'og:title', config.title);
  setMetaTag('property', 'og:description', config.description);
  setMetaTag('property', 'og:url', config.canonicalUrl);
  setMetaTag('property', 'og:type', config.ogType ?? 'website');

  if (config.jsonLd) {
    config.jsonLd.forEach((entry) => setJsonLd(entry.id, entry.data));
  }

  META_NAME_KEYS.forEach(() => undefined);
  META_PROPERTY_KEYS.forEach(() => undefined);
}
