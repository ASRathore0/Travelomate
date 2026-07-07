import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { getBlogPostBySlug } from '../lib/blogPosts';
import { SITE_NAME, SITE_URL } from '../lib/seo';
import { applyHead, removeJsonLd } from '../lib/head';
import { loadBlogPostBySlug } from '../lib/blogService';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(() => (slug ? getBlogPostBySlug(slug) : undefined));

  useEffect(() => {
    if (!slug) {
      return;
    }

    let active = true;

    loadBlogPostBySlug(slug).then((loadedPost) => {
      if (active) {
        setPost(loadedPost);
      }
    });

    return () => {
      active = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!post) {
      return;
    }

    const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
    const blogSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: post.image,
      author: {
        '@type': 'Organization',
        name: SITE_NAME
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${SITE_URL}/blog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: canonicalUrl
        }
      ]
    };

    applyHead({
      title: post.title,
      description: post.excerpt,
      canonicalUrl,
      ogType: 'article',
      jsonLd: [
        { id: `blog-${post.slug}`, data: blogSchema },
        { id: `breadcrumb-${post.slug}`, data: breadcrumbSchema }
      ]
    });

    return () => {
      removeJsonLd(`blog-${post.slug}`);
      removeJsonLd(`breadcrumb-${post.slug}`);
    };
  }, [post]);

  if (!post) {
    return (
      <div className="pt-24 pb-24 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-foreground/40 mb-4">Not Found</p>
          <h1 className="text-4xl font-display font-bold mb-6">This article does not exist.</h1>
          <Link to="/blog" className="text-brand font-bold">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24 bg-background text-foreground">

      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <div className="mt-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand font-black mb-4">
            {post.category}
          </p>
          <h1 className="text-4xl sm:text-5xl font-display font-black leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-foreground/40 mb-10">
            <span className="flex items-center gap-2">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>
        </div>

        <div className="relative aspect-[16/10] rounded-[36px] overflow-hidden border border-border-subtle mb-12">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-12">
          {post.content.map((section, index) => (
            <section key={index} className="space-y-4">
              {section.heading && <h2 className="text-2xl font-bold">{section.heading}</h2>}
              {section.paragraphs.map((text, paragraphIndex) => (
                <p key={paragraphIndex} className="text-foreground/70 leading-relaxed">
                  {text}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3 text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
