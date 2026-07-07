import {
  clearCustomBlogPosts,
  getBlogPostBySlug,
  getCustomBlogPosts,
  getPublishedBlogPosts,
  removeCustomBlogPost,
  upsertCustomBlogPost,
  blogPosts as seedBlogPosts,
  type BlogPost
} from './blogPosts';

const BLOG_API_BASE_URL = import.meta.env.DEV ? import.meta.env.VITE_BLOG_API_URL?.trim() : '';
const BLOG_API_PATH = '/api/blog-posts.php';

function hasRemoteApi() {
  return Boolean(BLOG_API_BASE_URL || import.meta.env.PROD);
}

function buildApiUrl(query: string) {
  const baseUrl = BLOG_API_BASE_URL || '';
  return `${baseUrl}${BLOG_API_PATH}${query}`;
}

function mergeWithSeedPosts(customPosts: BlogPost[]) {
  const customSlugs = new Set(customPosts.map((post) => post.slug));
  return [...customPosts, ...seedBlogPosts.filter((post) => !customSlugs.has(post.slug))];
}

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  if (!hasRemoteApi()) {
    throw new Error('Blog API URL is not configured.');
  }

  const response = await fetch(buildApiUrl(path), {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {})
    },
    ...init
  });

  if (!response.ok) {
    throw new Error(`Blog API request failed with ${response.status}.`);
  }

  return (await response.json()) as T;
}

export function isSharedBlogEnabled() {
  return hasRemoteApi();
}

export async function loadPublishedBlogPosts() {
  if (!hasRemoteApi()) {
    return getPublishedBlogPosts();
  }

  try {
    const result = await requestJson<{ posts: BlogPost[] }>('');
    return mergeWithSeedPosts(result.posts);
  } catch {
    return getPublishedBlogPosts();
  }
}

export async function loadBlogPostBySlug(slug: string) {
  if (!hasRemoteApi()) {
    return getBlogPostBySlug(slug);
  }

  try {
    const result = await requestJson<{ post: BlogPost | null }>(`?slug=${encodeURIComponent(slug)}`);
    return result.post ?? undefined;
  } catch {
    return getBlogPostBySlug(slug);
  }
}

export async function loadCustomBlogPosts() {
  if (!hasRemoteApi()) {
    return getCustomBlogPosts();
  }

  try {
    const result = await requestJson<{ posts: BlogPost[] }>('?scope=custom');
    return result.posts;
  } catch {
    return getCustomBlogPosts();
  }
}

export async function saveCustomBlogPost(post: BlogPost) {
  if (!hasRemoteApi()) {
    upsertCustomBlogPost(post);
    return getPublishedBlogPosts();
  }

  try {
    const result = await requestJson<{ posts: BlogPost[] }>('', {
      method: 'POST',
      body: JSON.stringify(post)
    });
    return mergeWithSeedPosts(result.posts);
  } catch {
    upsertCustomBlogPost(post);
    return getPublishedBlogPosts();
  }
}

export async function deleteCustomBlogPost(slug: string) {
  if (!hasRemoteApi()) {
    removeCustomBlogPost(slug);
    return getPublishedBlogPosts();
  }

  try {
    const result = await requestJson<{ posts: BlogPost[] }>(`?slug=${encodeURIComponent(slug)}`, {
      method: 'DELETE'
    });
    return mergeWithSeedPosts(result.posts);
  } catch {
    removeCustomBlogPost(slug);
    return getPublishedBlogPosts();
  }
}

export async function clearAllCustomBlogPosts() {
  if (!hasRemoteApi()) {
    clearCustomBlogPosts();
    return getPublishedBlogPosts();
  }

  try {
    const result = await requestJson<{ posts: BlogPost[] }>('', {
      method: 'DELETE'
    });
    return mergeWithSeedPosts(result.posts);
  } catch {
    clearCustomBlogPosts();
    return getPublishedBlogPosts();
  }
}