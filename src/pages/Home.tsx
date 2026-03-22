import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { articles, getFeaturedArticles } from '../data/articles';
import { tierLists } from '../data/tierLists';
import { FrontPage } from '../components/sections/FrontPage';
import { ColumnsGrid } from '../components/sections/ColumnsGrid';
import { TierListSection } from '../components/sections/TierListSection';
import { defaultSeo } from '../utils/seo';

export default function Home() {
  const featured = getFeaturedArticles();
  const recent = articles.slice(0, 6);
  const moviesTierList = tierLists[0];

  return (
    <>
      <Helmet>
        <title>{defaultSeo.title}</title>
        <meta name="description" content={defaultSeo.description} />
        <meta property="og:title" content={defaultSeo.ogTitle} />
        <meta property="og:description" content={defaultSeo.ogDescription} />
        <meta property="og:image" content={defaultSeo.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Ticker strip */}
      <div className="ticker-strip" role="banner">
        MARLOWE NEWSPAPERS &nbsp;✦&nbsp; ARTS &middot; CINEMA &middot; THE WRITTEN WORD &nbsp;✦&nbsp; ALL OPINIONS FINAL &nbsp;✦&nbsp; NO REFUNDS
      </div>

      {/* Front page hero */}
      <div className="press-rule-triple" />
      <FrontPage articles={featured.length > 0 ? featured : articles} />

      {/* Divider */}
      <div className="max-w-broadsheet mx-auto px-4 md:px-8">
        <div className="ornament-rule ornament-rule-heavy">✦</div>
      </div>

      {/* Recent dispatches grid */}
      <motion.div
        className="max-w-broadsheet mx-auto px-4 md:px-8 py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <ColumnsGrid
          articles={recent}
          sectionTitle="RECENT DISPATCHES"
          sectionRight="ALL CATEGORIES"
        />
      </motion.div>

      {/* Divider */}
      <div className="max-w-broadsheet mx-auto px-4 md:px-8">
        <div className="ornament-rule ornament-rule-heavy">✦</div>
      </div>

      {/* Tier list preview */}
      <motion.div
        className="max-w-broadsheet mx-auto px-4 md:px-8 py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <TierListSection tierList={moviesTierList} />
      </motion.div>
    </>
  );
}
