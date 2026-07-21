import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { getBlogPostBySlug, type BlogPost } from '../lib/blogPosts';
import { SITE_NAME, SITE_URL } from '../lib/seo';
import { applyHead, removeJsonLd } from '../lib/head';
import { loadBlogPostBySlug, loadPublishedBlogPosts } from '../lib/blogService';
import { motion } from 'motion/react';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(() => (slug ? getBlogPostBySlug(slug) : undefined));
  const [recommendations, setRecommendations] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (!slug) {
      return;
    }

    // Set post from local storage synchronously on slug change to prevent flash of old content.
    setPost(getBlogPostBySlug(slug));

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
    if (!post || !slug) {
      return;
    }

    let active = true;

    loadPublishedBlogPosts().then((allPosts) => {
      if (!active) {
        return;
      }

      const otherPosts = allPosts.filter((p) => p.slug !== slug);
      const sameCategory = otherPosts.filter((p) => p.category === post.category);
      const diffCategory = otherPosts.filter((p) => p.category !== post.category);

      setRecommendations([...sameCategory, ...diffCategory].slice(0, 3));
    });

    return () => {
      active = false;
    };
  }, [slug, post?.category]);

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

      {recommendations.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mt-20 pt-16 border-t border-foreground/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand font-black mb-2 block">
                Further Reading
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight italic">
                More <span className="text-brand not-italic">Travel</span> Insights.
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand hover:gap-4 transition-all"
            >
              View All Articles <ChevronLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((recPost, i) => (
              <motion.article
                key={recPost.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${recPost.slug}`} className="block">
                  <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-5 border border-border-subtle">
                    <img
                      src={recPost.image}
                      alt={recPost.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/90 dark:bg-navy/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-brand">
                        {recPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[9px] uppercase font-black tracking-[0.2em] text-foreground/40 mb-3">
                    <span>{recPost.date}</span>
                    <span className="w-1 h-1 rounded-full bg-brand" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {recPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors line-clamp-2">
                    {recPost.title}
                  </h3>
                  <p className="text-xs text-foreground/60 leading-relaxed line-clamp-2 mb-4">
                    {recPost.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
