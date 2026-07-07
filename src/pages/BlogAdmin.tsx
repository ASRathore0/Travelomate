import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  FileText,
  Image as ImageIcon,
  Layers3,
  Plus,
  Save,
  Sparkles,
  Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from '../lib/blogPosts';
import {
  clearAllCustomBlogPosts,
  deleteCustomBlogPost,
  isSharedBlogEnabled,
  loadCustomBlogPosts,
  saveCustomBlogPost
} from '../lib/blogService';

type SectionForm = {
  heading: string;
  paragraphs: string;
  bullets: string;
};

type BlogFormState = {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  sections: SectionForm[];
};

const createSection = (): SectionForm => ({
  heading: '',
  paragraphs: '',
  bullets: ''
});

const createInitialForm = (): BlogFormState => ({
  title: '',
  slug: '',
  category: 'Insights',
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
  excerpt: '',
  sections: [createSection()]
});

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const splitLines = (value: string) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

export default function BlogAdmin() {
  const navigate = useNavigate();
  const [customPosts, setCustomPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState<BlogFormState>(() => createInitialForm());
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [slugTouched, setSlugTouched] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const sharedBlogEnabled = isSharedBlogEnabled();

  useEffect(() => {
    let active = true;

    loadCustomBlogPosts().then((posts) => {
      if (active) {
        setCustomPosts(posts);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const updateSection = (index: number, field: keyof SectionForm, value: string) => {
    setForm((current) => ({
      ...current,
      sections: current.sections.map((section, sectionIndex) =>
        sectionIndex === index ? { ...section, [field]: value } : section
      )
    }));
  };

  const addSection = () => {
    setForm((current) => ({
      ...current,
      sections: [...current.sections, createSection()]
    }));
  };

  const removeSection = (index: number) => {
    setForm((current) => {
      if (current.sections.length === 1) {
        return current;
      }

      return {
        ...current,
        sections: current.sections.filter((_, sectionIndex) => sectionIndex !== index)
      };
    });
  };

  const resetForm = () => {
    setForm(createInitialForm());
    setEditingSlug(null);
    setSlugTouched(false);
  };

  const mapPostToForm = (post: BlogPost): BlogFormState => ({
    title: post.title,
    slug: post.slug,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    image: post.image,
    excerpt: post.excerpt,
    sections:
      post.content.length > 0
        ? post.content.map((section) => ({
            heading: section.heading ?? '',
            paragraphs: section.paragraphs.join('\n'),
            bullets: section.bullets?.join('\n') ?? ''
          }))
        : [createSection()]
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage('');
    setErrorMessage('');

    const title = form.title.trim();
    const slug = slugify(form.slug || title);
    const excerpt = form.excerpt.trim();

    if (!title || !slug || !excerpt) {
      setErrorMessage('Title, slug, and excerpt are required.');
      return;
    }

    const content = form.sections
      .map((section) => ({
        heading: section.heading.trim(),
        paragraphs: splitLines(section.paragraphs),
        bullets: splitLines(section.bullets)
      }))
      .filter((section) => section.paragraphs.length > 0 || section.bullets.length > 0);

    if (content.length === 0) {
      setErrorMessage('Add at least one section with paragraphs or bullet points.');
      return;
    }

    const nextPost: BlogPost = {
      slug,
      title,
      category: form.category.trim() || 'Insights',
      date: form.date.trim(),
      readTime: form.readTime.trim() || '5 min read',
      image: form.image.trim(),
      excerpt,
      content
    };

    setIsSaving(true);

    try {
      await saveCustomBlogPost(nextPost);
      const nextCustomPosts = await loadCustomBlogPosts();
      setCustomPosts(nextCustomPosts);
      setStatusMessage(`${editingSlug ? 'Updated' : 'Published'} ${title}.`);
      resetForm();
      navigate(`/blog/${slug}`);
    } catch {
      setErrorMessage('Unable to save the post.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (slug: string) => {
    const shouldDelete = window.confirm('Delete this custom blog post?');

    if (!shouldDelete) {
      return;
    }

    try {
      await deleteCustomBlogPost(slug);
      const nextCustomPosts = await loadCustomBlogPosts();
      setCustomPosts(nextCustomPosts);
      setStatusMessage('Post removed.');
    } catch {
      setErrorMessage('Unable to delete the post.');
    }
  };

  const handleEdit = (post: BlogPost) => {
    setStatusMessage('');
    setErrorMessage('');
    setEditingSlug(post.slug);
    setSlugTouched(true);
    setForm(mapPostToForm(post));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please upload an image file.');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const uploadedImage = typeof reader.result === 'string' ? reader.result : '';

      if (!uploadedImage) {
        setErrorMessage('Could not read the uploaded image.');
        return;
      }

      setErrorMessage('');
      setForm((current) => ({ ...current, image: uploadedImage }));
    };

    reader.readAsDataURL(file);
    event.target.value = '';
  };

  const handleClearAll = async () => {
    const shouldClear = window.confirm('Remove all custom posts from this browser?');

    if (!shouldClear) {
      return;
    }

    try {
      await clearAllCustomBlogPosts();
      setCustomPosts([]);
      setStatusMessage('All custom posts cleared.');
    } catch {
      setErrorMessage('Unable to clear custom posts.');
    }
  };

  return (
    <div className="pt-10 pb-24 bg-background text-foreground overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-brand/5 blur-[140px] -mt-56 rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-black text-brand uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3 h-3" /> Blog Admin Panel
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-[0.9] tracking-tighter mb-6 italic">
            Publish <span className="text-brand not-italic">directly</span> from the panel.
          </h1>
          <p className="max-w-2xl text-foreground/60 text-lg leading-relaxed mb-8">
            Create new articles, manage custom posts, and send them straight into the blog feed without editing source files.
          </p>

          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            {sharedBlogEnabled ? 'Saving to shared blog API' : 'Local fallback mode'}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground/15 bg-foreground/5 hover:bg-foreground/10 transition-colors font-bold text-sm"
            >
              <Eye className="w-4 h-4" /> View Blog
            </button>
            <button
              type="button"
              onClick={handleClearAll}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground/15 hover:bg-foreground/5 transition-colors font-bold text-sm"
            >
              <Trash2 className="w-4 h-4" /> Clear Custom Posts
            </button>
            <div className="text-sm text-foreground/45">
              {customPosts.length} custom post{customPosts.length === 1 ? '' : 's'} saved locally
            </div>
            {editingSlug && (
              <div className="text-sm font-bold text-brand">Editing /blog/{editingSlug}</div>
            )}
          </div>

          {(statusMessage || errorMessage) && (
            <div className="mt-6 space-y-3">
              {statusMessage && (
                <div className="rounded-2xl border border-electric-green/20 bg-electric-green/10 text-foreground px-4 py-3 text-sm font-medium">
                  {statusMessage}
                </div>
              )}
              {errorMessage && (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 text-foreground px-4 py-3 text-sm font-medium">
                  {errorMessage}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="p-6 sm:p-8 rounded-[32px] border border-border-subtle bg-foreground/[0.02] backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-brand">
              <FileText className="w-4 h-4" /> Post Details
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Title</span>
                <input
                  type="text"
                  value={form.title}
                  onChange={(event) => {
                    const nextTitle = event.target.value;
                    setForm((current) => ({
                      ...current,
                      title: nextTitle,
                      slug: slugTouched ? current.slug : slugify(nextTitle)
                    }));
                  }}
                  placeholder="How AI is changing travel budgets"
                  className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors"
                />
              </label>

              <label className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Slug</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(event) => {
                    setSlugTouched(true);
                    setForm((current) => ({ ...current, slug: event.target.value }));
                  }}
                  placeholder="ai-travel-budgets-2026"
                  className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors"
                />
              </label>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <label className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Category</span>
                <input
                  type="text"
                  value={form.category}
                  onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                  placeholder="Insights"
                  className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors"
                />
              </label>

              <label className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Date</span>
                <input
                  type="text"
                  value={form.date}
                  onChange={(event) => setForm((current) => ({ ...current, date: event.target.value }))}
                  placeholder="Jun 15, 2026"
                  className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors"
                />
              </label>

              <label className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Read Time</span>
                <input
                  type="text"
                  value={form.readTime}
                  onChange={(event) => setForm((current) => ({ ...current, readTime: event.target.value }))}
                  placeholder="6 min read"
                  className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors"
                />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Hero Image</span>
              <div className="space-y-3">
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  <input
                    type="url"
                    value={form.image}
                    onChange={(event) => setForm((current) => ({ ...current, image: event.target.value }))}
                    placeholder="https://..."
                    className="w-full bg-background border border-foreground/10 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-brand/40 transition-colors"
                  />
                </div>
                <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/15 bg-foreground/5 hover:bg-foreground/10 transition-colors font-bold text-xs uppercase tracking-[0.2em] cursor-pointer w-fit">
                  <Plus className="w-4 h-4" /> Upload Picture
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
                <p className="text-xs text-foreground/40">
                  Upload a local image or paste an image URL. Uploaded files are stored in this browser.
                </p>
              </div>
            </label>

            <label className="space-y-2 block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Excerpt</span>
              <textarea
                value={form.excerpt}
                onChange={(event) => setForm((current) => ({ ...current, excerpt: event.target.value }))}
                rows={4}
                placeholder="One short summary that appears in the blog feed and SEO meta data."
                className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors resize-y"
              />
            </label>
          </div>

          <div className="p-6 sm:p-8 rounded-[32px] border border-border-subtle bg-foreground/[0.02] backdrop-blur-sm space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-brand">
                <Layers3 className="w-4 h-4" /> Content Sections
              </div>
              <button
                type="button"
                onClick={addSection}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-white text-sm font-bold hover:scale-[1.02] transition-transform"
              >
                <Plus className="w-4 h-4" /> Add Section
              </button>
            </div>

            <div className="space-y-5">
              {form.sections.map((section, index) => (
                <div key={index} className="p-5 rounded-3xl bg-background border border-foreground/10 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-lg">Section {index + 1}</h3>
                    <button
                      type="button"
                      onClick={() => removeSection(index)}
                      disabled={form.sections.length === 1}
                      className="text-sm font-bold text-foreground/50 hover:text-foreground disabled:opacity-30"
                    >
                      Remove
                    </button>
                  </div>

                  <label className="space-y-2 block">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Heading</span>
                    <input
                      type="text"
                      value={section.heading}
                      onChange={(event) => updateSection(index, 'heading', event.target.value)}
                      placeholder="Section headline"
                      className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors"
                    />
                  </label>

                  <label className="space-y-2 block">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Paragraphs</span>
                    <textarea
                      value={section.paragraphs}
                      onChange={(event) => updateSection(index, 'paragraphs', event.target.value)}
                      rows={5}
                      placeholder="Write one paragraph per line. Blank lines will be ignored."
                      className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors resize-y"
                    />
                  </label>

                  <label className="space-y-2 block">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Bullets</span>
                    <textarea
                      value={section.bullets}
                      onChange={(event) => updateSection(index, 'bullets', event.target.value)}
                      rows={4}
                      placeholder="One bullet per line."
                      className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors resize-y"
                    />
                  </label>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-sm text-foreground/50">
                Posts are saved in this browser and show up immediately in the blog feed.
              </p>
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-black hover:opacity-90 disabled:opacity-60 transition-opacity"
              >
                <Save className="w-4 h-4" />
                {isSaving ? 'Saving...' : editingSlug ? 'Update Post' : 'Publish Post'}
              </button>
            </div>
          </div>
        </motion.form>

        <div className="space-y-6">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="p-6 sm:p-8 rounded-[32px] border border-border-subtle bg-navy text-white sticky top-24"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/60 font-black mb-6">
              <Calendar className="w-4 h-4" /> Preview
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-electric-green font-black">
                {form.category || 'Insights'}
              </p>
              <h2 className="text-3xl font-display font-bold leading-tight">
                {form.title || 'Your headline appears here'}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/50">
                <span className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> {form.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-3 h-3" /> {form.readTime}
                </span>
              </div>
              <p className="text-white/70 leading-relaxed">
                {form.excerpt || 'Add an excerpt and a hero image to complete the article preview.'}
              </p>
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                {form.image ? (
                  <img src={form.image} alt={form.title || 'Blog preview'} className="w-full h-full object-cover" />
                ) : null}
              </div>
              <div className="flex items-center gap-2 text-electric-green font-black text-sm uppercase tracking-widest">
                <Eye className="w-4 h-4" /> {form.slug ? `/blog/${slugify(form.slug)}` : '/blog/your-slug'}
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 sm:p-8 rounded-[32px] border border-border-subtle bg-foreground/[0.02] space-y-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-brand">
                  <FileText className="w-4 h-4" /> Custom Posts
                </div>
                <p className="text-sm text-foreground/50 mt-2">Manage posts created from this panel.</p>
              </div>
            </div>

            {customPosts.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-foreground/10 bg-background p-6 text-sm text-foreground/50">
                No custom posts yet. Publish one and it will appear here.
              </div>
            ) : (
              <div className="space-y-3">
                {customPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="rounded-3xl border border-foreground/10 bg-background p-4 flex items-start justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-brand font-black mb-2">
                        {post.category}
                      </p>
                      <h3
                        className="font-bold leading-tight min-h-[3.5rem]"
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                          overflow: 'hidden'
                        }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mt-2">
                        /blog/{post.slug}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleEdit(post)}
                        className="text-sm font-bold text-foreground/50 hover:text-foreground transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(post.slug)}
                        className="text-sm font-bold text-foreground/50 hover:text-foreground transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
