import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Clock, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPublishedBlogPosts } from '../lib/blogPosts';
import { loadPublishedBlogPosts, isSharedBlogEnabled } from '../lib/blogService';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState(() => getPublishedBlogPosts());

  useEffect(() => {
    let active = true;

    loadPublishedBlogPosts().then((posts) => {
      if (active) {
        setBlogPosts(posts);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="pt-10 pb-20 bg-background text-foreground overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-20 relative text-center">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand/5 blur-[120px] -mt-64 rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-black text-brand uppercase tracking-[0.2em] mb-8">
            Travel Intelligence Blog
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-[0.9] tracking-tighter mb-8 italic">
            Thinking <span className="text-brand not-italic">Better</span> Travel.
          </h1>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 font-bold text-foreground/60">
              {isSharedBlogEnabled() ? 'Shared blog sync enabled' : 'Local fallback mode'}
            </div>
            <Link to="/admin/blogs" className="px-4 py-2 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors font-bold">
              Open Admin Panel
            </Link>
          </div>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search articles, insights..." 
              className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl pl-12 pr-6 py-4 focus:border-brand/30 outline-none transition-all"
            />
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-6 border border-border-subtle">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-navy/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-[10px] uppercase font-black tracking-[0.2em] text-foreground/40 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-brand" />
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 group-hover:text-brand transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-brand font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Article <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-32">
         <div className="p-10 bg-navy text-white rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
               <h3 className="text-3xl font-display font-bold mb-2">Subscribe to Intelligence</h3>
               <p className="text-white/60">Get the latest travel management insights delivered bi-weekly.</p>
            </div>
            <div className="flex w-full md:w-auto gap-4">
               <input type="email" placeholder="email@company.com" className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 outline-none focus:border-brand transition-all flex-grow" />
               <button className="px-8 py-3 bg-brand text-white font-black rounded-xl hover:scale-105 transition-all">
                  Join
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
