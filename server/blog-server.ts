import express from 'express';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts, type BlogPost } from '../src/lib/blogPosts.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'blog-posts.json');
const port = Number(process.env.BLOG_API_PORT ?? 3001);

type StoredData = {
  posts: BlogPost[];
};

function ensureStorage() {
  mkdirSync(dataDir, { recursive: true });

  if (!existsSync(dataFile)) {
    writeFileSync(dataFile, JSON.stringify({ posts: [] } satisfies StoredData, null, 2), 'utf8');
  }
}

function readCustomPosts(): BlogPost[] {
  ensureStorage();

  try {
    const rawValue = readFileSync(dataFile, 'utf8');
    const parsedValue = JSON.parse(rawValue) as StoredData;
    return Array.isArray(parsedValue.posts) ? parsedValue.posts : [];
  } catch {
    return [];
  }
}

function writeCustomPosts(posts: BlogPost[]) {
  ensureStorage();
  writeFileSync(dataFile, JSON.stringify({ posts }, null, 2), 'utf8');
}

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use((_, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  next();
});

app.options('*', (_, response) => {
  response.sendStatus(204);
});

function handleBlogRequest(request: express.Request, response: express.Response) {
  const slug = typeof request.query.slug === 'string' ? request.query.slug : '';
  const scope = typeof request.query.scope === 'string' ? request.query.scope : '';
  const method = request.method.toUpperCase();

  if (method === 'GET' && scope === 'custom') {
    response.json({ posts: readCustomPosts() });
    return;
  }

  if (method === 'GET' && slug) {
    const post = readCustomPosts().find((item) => item.slug === slug);

    if (!post) {
      response.status(404).json({ post: null });
      return;
    }

    response.json({ post });
    return;
  }

  if (method === 'GET') {
    response.json({ posts: readCustomPosts() });
    return;
  }

  if (method === 'POST') {
    const post = request.body as BlogPost;

    if (!post?.slug || !post?.title || !post?.excerpt || !post?.content) {
      response.status(400).json({ message: 'Invalid blog post payload.' });
      return;
    }

    const customPosts = readCustomPosts();
    const nextPosts = [post, ...customPosts.filter((item) => item.slug !== post.slug)];
    writeCustomPosts(nextPosts);

    response.json({ posts: nextPosts });
    return;
  }

  if (method === 'DELETE' && slug) {
    const nextPosts = readCustomPosts().filter((post) => post.slug !== slug);
    writeCustomPosts(nextPosts);

    response.json({ posts: nextPosts });
    return;
  }

  if (method === 'DELETE') {
    writeCustomPosts([]);
    response.json({ posts: [] });
    return;
  }

  response.status(405).json({ message: 'Method not allowed.' });
}

app.all('/api/blog-posts.php', handleBlogRequest);

// Local compatibility with the previous endpoints.
app.all('/api/blog-posts', handleBlogRequest);
app.all('/api/blog-posts/custom', handleBlogRequest);
app.all('/api/blog-posts/:slug', handleBlogRequest);

app.listen(port, () => {
  console.log(`Blog API listening on http://localhost:${port}`);
});