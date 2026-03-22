import { Helmet } from 'react-helmet-async';
import { author } from '../data/author';
import { HalftoneImage } from '../components/ui/HalftoneImage';
import { PullQuote } from '../components/ui/PullQuote';
import { SectionHeader } from '../components/layout/SectionHeader';
import { NewsCard } from '../components/ui/NewsCard';
import { getArticleBySlug } from '../data/articles';
import { buildSeoMeta } from '../utils/seo';

export default function About() {
  const seo = buildSeoMeta({
    title: 'About | Marlowe Newspapers',
    description: author.shortBio,
    ogImage: author.avatar,
  });

  const pickSlugs = [author.picks.film, author.picks.tvShow, author.picks.anime, author.picks.novel];
  // Lookup articles by matching title keywords
  const pickArticles = pickSlugs
    .map(slug => getArticleBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getArticleBySlug>>[];

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

      <div className="max-w-broadsheet mx-auto px-4 md:px-8 py-8">
        <SectionHeader left="THE EDITOR" right="STAFF FILE" />

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left column: portrait + classifieds */}
          <div className="md:col-span-1">
            <HalftoneImage
              src={author.avatar}
              alt={`${author.name} — Staff Critic`}
              cutline={`${author.name} — Staff Critic at Marlowe Newspapers`}
            />

            {/* Contact classified */}
            <div className="classified mt-6">
              <p className="font-label text-[0.6rem] tracking-widest mb-2" style={{ color: 'var(--ink-faded)' }}>
                CONTACT
              </p>
              <p className="font-mono text-[0.75rem] leading-relaxed" style={{ color: 'var(--ink)' }}>
                {author.name}<br />
                Staff Critic &amp; Editor<br />
                {author.location}
              </p>
            </div>

            {/* Philosophy classified */}
            <div
              className="mt-6 p-4"
              style={{ borderLeft: '3px solid var(--red)', background: 'var(--smudge)' }}
            >
              <p className="font-label text-[0.6rem] tracking-widest mb-2" style={{ color: 'var(--red)' }}>
                THE METHOD
              </p>
              <p className="font-editorial italic text-[0.85rem] leading-relaxed" style={{ color: 'var(--ink)' }}>
                Writing under the alias <strong>{author.alias}</strong>, he files each review as a case report.
              </p>
            </div>
          </div>

          {/* Right column: bio + beliefs */}
          <div className="md:col-span-2">
            <h1
              className="font-headline mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--ink)' }}
            >
              {author.name}
            </h1>
            <p className="font-label text-[0.65rem] tracking-widest mb-4" style={{ color: 'var(--ink-faded)' }}>
              {author.title}
            </p>

            <div className="press-rule mb-5" />

            <p
              className="font-body leading-relaxed mb-4 drop-cap"
              style={{ fontSize: '1rem', color: 'var(--ink)' }}
            >
              {author.bio}
            </p>

            <div className="press-rule-heavy my-6" />

            {/* The Editor's Convictions */}
            <p
              className="font-label text-[0.65rem] tracking-widest mb-4"
              style={{ color: 'var(--ink)' }}
            >
              THE EDITOR'S CONVICTIONS
            </p>
            <ol className="space-y-3">
              {author.beliefs.map((belief, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="font-mono text-[0.7rem] shrink-0 mt-0.5"
                    style={{ color: 'var(--red)' }}
                  >
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <p
                    className="font-editorial italic text-[0.9rem] leading-relaxed"
                    style={{ color: 'var(--ink)' }}
                  >
                    {belief}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Philosophy pull quote — full width */}
        <PullQuote>{author.philosophy}</PullQuote>

        {/* Desert Island Picks */}
        <div className="press-rule-heavy my-8" />
        <SectionHeader left="DESERT ISLAND PICKS" right="FOUR WORKS TO STRAND WITH" />

        {pickArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {pickArticles.map(article => (
              <NewsCard key={article.id} article={article} size="feature" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[author.picks.film, author.picks.tvShow, author.picks.anime, author.picks.novel].map((pick, i) => (
              <div
                key={i}
                className="classified text-center"
                style={{ padding: '1.5rem 1rem' }}
              >
                <p className="font-headline text-sm" style={{ color: 'var(--ink)' }}>{pick}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
