import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getArticlesByCategory } from '../data/articles';
import { ColumnsGrid } from '../components/sections/ColumnsGrid';
import { SectionHeader } from '../components/layout/SectionHeader';
import { HalftoneImage } from '../components/ui/HalftoneImage';
import { useSearch } from '../hooks/useSearch';
import { buildSeoMeta } from '../utils/seo';

export default function News() {
  const allNews = getArticlesByCategory('news');
  const { query, setQuery, results } = useSearch(allNews);
  const seo = buildSeoMeta({
    title: 'Latest Dispatches | Marlowe Newspapers',
    description:
      'Latest dispatches from Philip Marlowe — news, opinions, and commentary on cinema, television, and storytelling.',
  });

  // Separate featured from the rest when not searching
  const featured = !query ? results[0] : null;
  const secondary = !query ? results.slice(1) : results;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Ticker strip */}
      <div className="ticker-strip" role="banner">
        LATE BREAKING &nbsp;✦&nbsp; DISPATCHES FROM THE PICTURE DESK &nbsp;✦&nbsp; ALL THE NEWS UNFIT FOR POLITE COMPANY
      </div>

      {/* Full-width dark page banner */}
      <div className="text-center py-5" style={{ background: 'var(--ink)' }}>
        <h2
          className="font-blackletter"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--paper)', lineHeight: 1, letterSpacing: '0.04em' }}
        >
          Dispatches
        </h2>
      </div>

      <div className="max-w-broadsheet mx-auto px-4 md:px-8 py-8">
        <SectionHeader left="LATEST DISPATCHES" right={`${results.length} FILED`} />

        {/* Subtitle dateline */}
        <p className="category-dateline">
          — Commentary, Opinion & Industry Dispatches by Philip Marlowe —
        </p>

        {/* Search */}
        <div className="mb-8">
          <input
            type="search"
            placeholder="Search dispatches..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="font-mono text-[0.8rem] bg-transparent w-full max-w-xs"
            style={{
              borderBottom: '1px solid var(--ink-faded)',
              padding: '0.3rem 0',
              color: 'var(--ink)',
              outline: 'none',
            }}
            aria-label="Search news dispatches"
          />
        </div>

        {results.length === 0 ? (
          <p className="font-body text-center py-12" style={{ color: 'var(--ink-faded)' }}>
            No dispatches found for &ldquo;{query}&rdquo;.
          </p>
        ) : (
          <>
            {/* ── Featured lead dispatch (no search query) ── */}
            {featured && (
              <>
                <div className="feature-lead mb-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Image */}
                    <Link
                      to={`/article/${featured.slug}`}
                      className="md:w-2/5 flex-shrink-0 block"
                      aria-label={`Read: ${featured.title}`}
                    >
                      <HalftoneImage
                        src={featured.coverImage}
                        alt={featured.coverImageAlt}
                        cutline={featured.cutline}
                        className="w-full"
                      />
                    </Link>

                    {/* Text block */}
                    <div className="flex-1 flex flex-col justify-start">
                      {featured.isBreaking && (
                        <span className="breaking-banner mb-3 inline-block">
                          LATE EDITION
                        </span>
                      )}

                      {/* Red accent bar */}
                      <div className="red-accent-bar" />

                      {/* Dispatch badge */}
                      <div className="dispatch-tag mb-3">LEAD DISPATCH</div>

                      <Link to={`/article/${featured.slug}`} className="headline-link">
                        <h2
                          className="font-headline mb-3"
                          style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                            lineHeight: 1.1,
                            color: 'var(--ink)',
                          }}
                        >
                          {featured.headline || featured.title}
                        </h2>
                      </Link>

                      {featured.subtitle && (
                        <p
                          className="font-editorial italic mb-3"
                          style={{ fontSize: '0.95rem', color: 'var(--ink-faded)' }}
                        >
                          {featured.subtitle}
                        </p>
                      )}

                      <p className="byline mb-4">
                        BY PHILIP MARLOWE &nbsp;|&nbsp; {featured.edition}
                        &nbsp;|&nbsp; {featured.readTime} MIN READ
                      </p>

                      <p
                        className="font-body mb-6"
                        style={{ color: 'var(--ink-faded)', fontSize: '0.9rem', lineHeight: 1.75 }}
                      >
                        {featured.synopsis}
                      </p>

                      <Link
                        to={`/article/${featured.slug}`}
                        className="font-label text-[0.7rem] tracking-widest uppercase inline-block self-start"
                        style={{
                          color: 'var(--red)',
                          borderBottom: '1px solid var(--red)',
                          paddingBottom: '2px',
                        }}
                        onMouseEnter={e =>
                          ((e.currentTarget as HTMLElement).style.opacity = '0.7')
                        }
                        onMouseLeave={e =>
                          ((e.currentTarget as HTMLElement).style.opacity = '1')
                        }
                      >
                        READ FULL DISPATCH →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Ornament divider before secondary articles */}
                {secondary.length > 0 && (
                  <div className="ornament-rule ornament-rule-heavy mb-8">
                    ❖&nbsp; FURTHER DISPATCHES &nbsp;❖
                  </div>
                )}
              </>
            )}

            {/* Secondary articles (or all results when searching) */}
            {secondary.length > 0 && (
              <ColumnsGrid articles={secondary} sectionTitle="DISPATCHES" />
            )}
          </>
        )}
      </div>
    </>
  );
}
