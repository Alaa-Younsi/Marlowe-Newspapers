import { Link } from 'react-router-dom';
import type { Article } from '../../types';
import { HalftoneImage } from './HalftoneImage';
import { BreakingBanner } from './BreakingBanner';
import { Byline } from './Byline';
import { formatDateShort } from '../../utils/dateFormat';

interface NewsCardProps {
  article: Article;
  size?: 'lead' | 'feature' | 'brief';
}

function RatingBadge({ rating }: { rating: number }) {
  const isTop = rating >= 9.0;
  return (
    <span className={`rating-badge ${isTop ? 'breaking' : ''}`}>
      ★ {rating.toFixed(1)}
    </span>
  );
}

function CategoryStamp({ category }: { category: string }) {
  const labels: Record<string, string> = {
    'movies': 'Motion Pictures',
    'tv-shows': 'Television',
    'anime': 'Anime',
    'novels-mangas': 'Novels & Manga',
    'news': 'Dispatches',
  };
  return (
    <span className="font-label text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: 'var(--ink-light)' }}>
      {labels[category] ?? category}
    </span>
  );
}

export function NewsCard({ article, size = 'feature' }: NewsCardProps) {
  if (size === 'lead') {
    return (
      <article className="news-card">
        {article.isBreaking && (
          <div className="mb-2">
            <BreakingBanner />
          </div>
        )}
        <div className="mb-1">
          <CategoryStamp category={article.category} />
        </div>
        <h2
          className="font-headline font-bold mb-2"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.1, color: 'var(--ink)' }}
        >
          <Link to={`/article/${article.slug}`} className="headline-link">
            {article.headline || article.title}
          </Link>
        </h2>

        <div className="press-rule" />

        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <Byline />
          {article.rating > 0 && <RatingBadge rating={article.rating} />}
        </div>

        <div className="mb-2">
          <Link to={`/article/${article.slug}`} aria-label={`Read: ${article.title}`} tabIndex={-1}>
            <HalftoneImage
              src={article.coverImage}
              alt={article.coverImageAlt}
              cutline={article.cutline}
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3" style={{ columnGap: '2rem' }}>
          <p className="font-body text-[0.9rem] text-justify" style={{ color: 'var(--ink-faded)' }}>
            {article.synopsis}
          </p>
          <div className="hidden md:block" />
        </div>

        <div className="mt-3">
          <Link
            to={`/article/${article.slug}`}
            className="font-label text-[0.65rem] font-bold tracking-[0.25em] uppercase hover:underline"
            style={{ color: 'var(--ink)' }}
          >
            READ FULL REPORT →
          </Link>
        </div>
      </article>
    );
  }

  if (size === 'brief') {
    return (
      <article className="news-card py-2">
        <h3
          className="font-headline font-bold mb-1"
          style={{ fontSize: '1rem', lineHeight: 1.2, color: 'var(--ink)' }}
        >
          <Link to={`/article/${article.slug}`} className="hover:underline">
            {article.headline || article.title}
          </Link>
        </h3>
        <p
          className="font-body text-[0.8rem] mb-1"
          style={{ color: 'var(--ink-faded)' }}
        >
          {article.synopsis.substring(0, 80)}…
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <RatingBadge rating={article.rating} />
          <span className="font-mono text-[0.65rem]" style={{ color: 'var(--ink-light)' }}>
            {article.readTime} MIN · <CategoryStamp category={article.category} />
          </span>
        </div>
      </article>
    );
  }

  // Default: feature
  return (
    <article className="news-card">
      {article.isBreaking && (
        <div className="mb-1">
          <BreakingBanner />
        </div>
      )}
      <div className="mb-1">
        <CategoryStamp category={article.category} />
      </div>

      <div className="red-accent-bar" />

      <h2
        className="font-headline font-bold mb-2"
        style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.15, color: 'var(--ink)' }}
      >
        <Link to={`/article/${article.slug}`} className="headline-link">
          {article.headline || article.title}
        </Link>
      </h2>

      <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
        <Byline />
        {article.rating > 0 && <RatingBadge rating={article.rating} />}
      </div>

      <div className="mb-2" style={{ maxHeight: '200px', overflow: 'hidden' }}>
        <Link to={`/article/${article.slug}`} aria-label={`Read: ${article.title}`} tabIndex={-1}>
          <HalftoneImage
            src={article.coverImage}
            alt={article.coverImageAlt}
          />
        </Link>
      </div>

      <p
        className="font-body text-[0.85rem] text-justify mb-2"
        style={{ color: 'var(--ink-faded)' }}
      >
        {article.synopsis.substring(0, 140)}…
      </p>

      <div
        className="flex items-center justify-between text-[0.65rem] font-mono mt-2"
        style={{ color: 'var(--ink-light)', borderTop: '1px solid var(--rule-light)', paddingTop: '0.4rem' }}
      >
        <span>{formatDateShort(article.publishDate)}</span>
        <span>{article.readTime} min read</span>
      </div>
    </article>
  );
}
