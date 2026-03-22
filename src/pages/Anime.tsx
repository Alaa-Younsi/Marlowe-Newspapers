import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { getArticlesByCategory } from '../data/articles';
import { ColumnsGrid } from '../components/sections/ColumnsGrid';
import { SectionHeader } from '../components/layout/SectionHeader';
import { useSearch } from '../hooks/useSearch';
import { buildSeoMeta } from '../utils/seo';

export default function Anime() {
  const allAnime = getArticlesByCategory('anime');
  const { query, setQuery, results } = useSearch(allAnime);
  const seo = buildSeoMeta({
    title: 'Anime | Marlowe Newspapers',
    description: "Anime reviews and analysis by Alaa Younsi. Japan's ink dreams, decoded.",
  });

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Full-width dark page banner */}
      <div className="text-center py-5" style={{ background: 'var(--ink)' }}>
        <h2
          className="font-blackletter"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--paper)', lineHeight: 1, letterSpacing: '0.04em' }}
        >
          Anime
        </h2>
      </div>

      <div className="max-w-broadsheet mx-auto px-4 md:px-8 py-8">
        <SectionHeader left="ANIME" right={`${results.length} REPORTS`} />

        <p className="category-dateline">
          — Reports from the Japanese Animation Desk by Philip Marlowe —
        </p>

        <div className="mb-6">
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
            aria-label="Search anime articles"
          />
        </div>

        {results.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ColumnsGrid articles={results} sectionTitle="ANIME" />
          </motion.div>
        ) : (
          <p className="font-body text-center py-12" style={{ color: 'var(--ink-faded)' }}>
            No dispatches found for "{query}".
          </p>
        )}
      </div>
    </>
  );
}
