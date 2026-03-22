import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getArticleBySlug, articles } from '../data/articles';
import { ReadingProgress } from '../components/ui/ReadingProgress';
import { BreakingBanner } from '../components/ui/BreakingBanner';
import { HalftoneImage } from '../components/ui/HalftoneImage';
import { PullQuote } from '../components/ui/PullQuote';
import { SpoilerBlock } from '../components/ui/SpoilerBlock';
import { Byline } from '../components/ui/Byline';
import { Dateline } from '../components/ui/Dateline';
import { SectionHeader } from '../components/layout/SectionHeader';
import { NewsCard } from '../components/ui/NewsCard';
import { buildSeoMeta } from '../utils/seo';
import { formatDate } from '../utils/dateFormat';
import type { ArticleSection } from '../types';

function RatingStamp({ rating }: { rating: number }) {
  const color = rating >= 9 ? 'var(--red)' : rating >= 7 ? 'var(--ink)' : 'var(--ink-faded)';
  return (
    <span
      className="font-mono text-[0.75rem] tracking-widest px-2 py-0.5"
      style={{
        border: `1px solid ${color}`,
        color,
        display: 'inline-block',
      }}
    >
      {rating.toFixed(1)} / 10
    </span>
  );
}

function CategoryStamp({ category }: { category: string }) {
  const labels: Record<string, string> = {
    movies: 'FILM',
    'tv-shows': 'TELEVISION',
    anime: 'ANIME',
    'novels-mangas': 'NOVEL / MANGA',
  };
  return (
    <span
      className="font-label text-[0.65rem] tracking-widest px-2 py-0.5"
      style={{
        background: 'var(--ink)',
        color: 'var(--paper)',
        display: 'inline-block',
      }}
    >
      {labels[category] ?? category.toUpperCase()}
    </span>
  );
}

function BodySection({ section, index }: { section: ArticleSection; index: number }) {
  switch (section.type) {
    case 'paragraph': {
      const text = Array.isArray(section.content) ? section.content.join(' ') : section.content;
      const isFirst = index === 0;
      return (
        <p
          className={`font-body leading-relaxed mb-4${isFirst ? ' drop-cap' : ''}`}
          style={{ fontSize: '1rem', color: 'var(--ink)' }}
        >
          {text}
        </p>
      );
    }
    case 'heading': {
      const text = Array.isArray(section.content) ? section.content.join(' ') : section.content;
      return (
        <h2
          className="font-headline text-2xl mt-8 mb-3"
          style={{ color: 'var(--ink)', columnSpan: 'all' } as React.CSSProperties}
        >
          {text}
        </h2>
      );
    }
    case 'subheading': {
      const text = Array.isArray(section.content) ? section.content.join(' ') : section.content;
      return (
        <h3
          className="font-headline text-xl mt-6 mb-2"
          style={{ color: 'var(--ink)', columnSpan: 'all' } as React.CSSProperties}
        >
          {text}
        </h3>
      );
    }
    case 'pullquote': {
      const text = Array.isArray(section.content) ? section.content.join(' ') : section.content;
      return (
        <div style={{ columnSpan: 'all' } as React.CSSProperties}>
          <PullQuote>{text}</PullQuote>
        </div>
      );
    }
    case 'spoiler': {
      const text = Array.isArray(section.content) ? section.content.join(' ') : section.content;
      return (
        <div style={{ columnSpan: 'all' } as React.CSSProperties}>
          <SpoilerBlock>{text}</SpoilerBlock>
        </div>
      );
    }
    case 'list': {
      const items = Array.isArray(section.content) ? section.content : [section.content];
      return (
        <ul className="font-body mb-4 space-y-1" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
          {items.map((item, i) => (
            <li key={i} style={{ fontSize: '1rem', color: 'var(--ink)' }}>{item}</li>
          ))}
        </ul>
      );
    }
    case 'divider':
      return (
        <div
          className="press-rule my-6"
          style={{ columnSpan: 'all' } as React.CSSProperties}
          aria-hidden="true"
        />
      );
    case 'dateline': {
      const text = Array.isArray(section.content) ? section.content.join(' ') : section.content;
      return (
        <div style={{ columnSpan: 'all' } as React.CSSProperties}>
          <Dateline date={text} />
        </div>
      );
    }
    default:
      return null;
  }
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="max-w-broadsheet mx-auto px-4 md:px-8 py-24 text-center">
        <p className="font-headline text-4xl mb-4" style={{ color: 'var(--ink)' }}>
          STORY NOT FOUND
        </p>
        <p className="font-body mb-8" style={{ color: 'var(--ink-faded)' }}>
          The dispatch you seek has vanished into the fog.
        </p>
        <button
          onClick={() => navigate('/')}
          className="font-label text-[0.75rem] tracking-widest px-6 py-2"
          style={{
            border: '1px solid var(--ink)',
            color: 'var(--ink)',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          RETURN TO FRONT PAGE
        </button>
      </div>
    );
  }

  const seo = buildSeoMeta({
    title: `${article.title} | Marlowe Newspapers`,
    description: article.metaDescription,
    ogImage: article.coverImage,
  });

  // Related articles: same category, not this article
  const related = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // Previous / next in date order (same category)
  const sameCat = articles
    .filter(a => a.category === article.category)
    .sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
  const idx = sameCat.findIndex(a => a.id === article.id);
  const prevArticle = idx > 0 ? sameCat[idx - 1] : null;
  const nextArticle = idx < sameCat.length - 1 ? sameCat[idx + 1] : null;

  const categoryPaths: Record<string, string> = {
    movies: '/films',
    'tv-shows': '/television',
    anime: '/anime',
    'novels-mangas': '/novels-manga',
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ReadingProgress />

      <article className="max-w-broadsheet mx-auto px-4 md:px-8 py-8">
        {/* Section header */}
        <SectionHeader
          left={article.category.replace('-', ' ').toUpperCase()}
          right={article.edition}
        />

        {/* Breaking banner */}
        {article.isBreaking && (
          <div className="mb-4">
            <BreakingBanner />
          </div>
        )}

        {/* Headline */}
        <h1
          className="font-headline leading-tight mb-3"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'var(--ink)',
            maxWidth: '52ch',
          }}
        >
          {article.title}
        </h1>

        {/* Subtitle / deck */}
        {article.subtitle && (
          <p
            className="font-body italic mb-4"
            style={{ fontSize: '1.15rem', color: 'var(--ink-faded)', maxWidth: '60ch' }}
          >
            {article.subtitle}
          </p>
        )}

        <div className="press-rule mb-4" />

        {/* Meta row: byline / rating / date / readtime */}
        <div
          className="flex flex-wrap items-center gap-3 mb-3"
          style={{ fontSize: '0.75rem' }}
        >
          <CategoryStamp category={article.category} />
          <Byline />
          <span className="font-mono" style={{ color: 'var(--ink-faded)' }}>
            {formatDate(article.publishDate)}
          </span>
          <span className="font-mono" style={{ color: 'var(--ink-faded)' }}>
            {article.readTime} min read
          </span>
          <RatingStamp rating={article.rating} />
        </div>

        {/* Dateline */}
        <Dateline date={formatDate(article.publishDate)} />

        <div className="press-rule mb-6" />

        {/* ── NEWSPAPER FLOAT LAYOUT ──────────────────────────────────────
            Three floated images break the text into natural newspaper sections.
            CSS float causes text to wrap right/left of each image then flow below.
        ──────────────────────────────────────────────────────────────── */}
        {(() => {
          const len  = article.body.length;
          const s1   = Math.max(1, Math.ceil(len / 3));
          const s2   = Math.max(s1 + 1, Math.ceil(len * 2 / 3));
          const c1   = article.body.slice(0, s1);
          const c2   = article.body.slice(s1, s2);
          const c3   = article.body.slice(s2);
          return (
            <div>
              {/* IMAGE 1 — float left, 4:3 landscape (40%) */}
              <HalftoneImage
                src={article.coverImage}
                alt={article.coverImageAlt}
                cutline={article.cutline}
                className="news-fig-left news-fig-lg"
              />
              <div className="article-body" style={{ columnCount: 1 }}>
                {c1.map((section, i) => (
                  <BodySection key={i} section={section} index={i} />
                ))}
              </div>

              {/* ── Section break ── */}
              <div className="news-clear" />
              <div className="press-rule my-4" />

              {/* IMAGE 2 — float right, 16:9 cinematic (46%) */}
              <HalftoneImage
                src={article.coverImage}
                alt={article.coverImageAlt}
                className="news-fig-right news-fig-xl"
              />
              <div className="article-body" style={{ columnCount: 1 }}>
                {c2.map((section, i) => (
                  <BodySection key={s1 + i} section={section} index={s1 + i} />
                ))}
              </div>

              {c3.length > 0 && (
                <>
                  {/* ── Section break ── */}
                  <div className="news-clear" />
                  <div className="press-rule my-4" />

                  {/* IMAGE 3 — float left, 3:4 portrait (32%) */}
                  <HalftoneImage
                    src={article.coverImage}
                    alt={article.coverImageAlt}
                    className="news-fig-left news-fig-sm"
                  />
                  <div className="article-body" style={{ columnCount: 1 }}>
                    {c3.map((section, i) => (
                      <BodySection key={s2 + i} section={section} index={s2 + i} />
                    ))}
                  </div>
                  <div className="news-clear" />
                </>
              )}
            </div>
          );
        })()}

        {/* The Detective's Verdict */}
        {article.personalTake && (
          <div
            className="my-8 p-6"
            style={{
              borderLeft: '4px solid var(--red)',
              background: 'var(--smudge)',
            }}
          >
            <p
              className="font-label text-[0.65rem] tracking-widest mb-3"
              style={{ color: 'var(--red)' }}
            >
              THE DETECTIVE'S VERDICT
            </p>
            <p
              className="font-editorial italic leading-relaxed"
              style={{ fontSize: '1.05rem', color: 'var(--ink)' }}
            >
              {article.personalTake}
            </p>
          </div>
        )}

        {/* Classified — What If */}
        {article.alternativeEnding && (
          <div className="classified my-8">
            <p
              className="font-label text-[0.65rem] tracking-widest mb-2"
              style={{ color: 'var(--ink-faded)' }}
            >
              CLASSIFIED — WHAT IF
            </p>
            <p
              className="font-mono text-[0.8rem] leading-relaxed"
              style={{ color: 'var(--ink)' }}
            >
              {article.alternativeEnding}
            </p>
          </div>
        )}

        <div className="press-rule-heavy my-8" />

        {/* Prev / Next navigation */}
        <nav
          aria-label="Article navigation"
          className="flex justify-between items-start gap-4 mb-12"
        >
          {prevArticle ? (
            <Link
              to={`/article/${prevArticle.slug}`}
              className="group flex items-start gap-2 max-w-xs"
              style={{ textDecoration: 'none' }}
            >
              <ArrowLeft
                size={16}
                className="mt-1 shrink-0"
                style={{ color: 'var(--ink-faded)' }}
              />
              <span>
                <span
                  className="font-label text-[0.6rem] tracking-widest block mb-1"
                  style={{ color: 'var(--ink-faded)' }}
                >
                  PREVIOUS
                </span>
                <span
                  className="font-headline text-[0.9rem] group-hover:underline"
                  style={{ color: 'var(--ink)' }}
                >
                  {prevArticle.title}
                </span>
              </span>
            </Link>
          ) : <span />}

          {nextArticle ? (
            <Link
              to={`/article/${nextArticle.slug}`}
              className="group flex items-start gap-2 max-w-xs text-right"
              style={{ textDecoration: 'none' }}
            >
              <span>
                <span
                  className="font-label text-[0.6rem] tracking-widest block mb-1"
                  style={{ color: 'var(--ink-faded)' }}
                >
                  NEXT
                </span>
                <span
                  className="font-headline text-[0.9rem] group-hover:underline"
                  style={{ color: 'var(--ink)' }}
                >
                  {nextArticle.title}
                </span>
              </span>
              <ArrowRight
                size={16}
                className="mt-1 shrink-0"
                style={{ color: 'var(--ink-faded)' }}
              />
            </Link>
          ) : <span />}
        </nav>

        {/* Back link */}
        <div className="mb-8">
          <Link
            to={categoryPaths[article.category] ?? '/'}
            className="font-label text-[0.65rem] tracking-widest inline-flex items-center gap-1"
            style={{ color: 'var(--ink-faded)', textDecoration: 'none' }}
          >
            <ArrowLeft size={12} />
            BACK TO {article.category.replace('-', ' ').toUpperCase()}
          </Link>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <>
            <SectionHeader left="RELATED DISPATCHES" right="" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {related.map(a => (
                <NewsCard key={a.id} article={a} size="feature" />
              ))}
            </div>
          </>
        )}
      </article>
    </>
  );
}
