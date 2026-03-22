import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Article } from '../../types';
import { SectionHeader } from '../layout/SectionHeader';
import { WeatherBox } from '../ui/WeatherBox';
import { NewsCard } from '../ui/NewsCard';
import { ColumnRule } from '../layout/ColumnRule';

interface FrontPageProps {
  articles: Article[];
}

export function FrontPage({ articles }: FrontPageProps) {
  const lead = articles.find(a => a.featured) ?? articles[0];
  const sideFeature = articles.filter(a => a !== lead).find(a => a.featured) ?? articles[1];
  const briefs = articles.filter(a => a !== lead && a !== sideFeature).slice(0, 4);

  return (
    <section className="max-w-broadsheet mx-auto px-4 md:px-8 py-6">
      <SectionHeader
        left="ARTS, CINEMA & THE WRITTEN WORD"
        right="Vol. I"
        className="mb-6 section-header-filled"
      />

      {/* Broadsheet grid */}
      <div className="flex flex-col lg:flex-row gap-0">
        {/* Lead story — left 2/3 */}
        <motion.div
          className="flex-1 lg:pr-6"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          style={{ minWidth: 0 }}
        >
          {lead && <NewsCard article={lead} size="lead" />}
        </motion.div>

        <ColumnRule className="hidden lg:block" />

        {/* Right sidebar — 1/3 */}
        <motion.div
          className="lg:w-72 flex-shrink-0 lg:pl-6"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
        >
          {/* Featured second story */}
          {sideFeature && (
            <div className="mb-6">
              <NewsCard article={sideFeature} size="feature" />
            </div>
          )}

          {/* Weather box */}
          <div className="mb-6">
            <WeatherBox />
          </div>

          {/* Brief stories */}
          {briefs.length > 0 && (
            <div>
              <div
                className="font-label font-bold text-[0.6rem] tracking-[0.3em] uppercase mb-3 pb-1"
                style={{
                  borderBottom: '1px solid var(--rule-light)',
                  color: 'var(--ink-faded)',
                }}
              >
                ALSO FILED
              </div>
              <div className="space-y-3">
                {briefs.map(a => (
                  <NewsCard key={a.id} article={a} size="brief" />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      <div className="flex justify-center mt-8 gap-4" aria-hidden="true">
        <div className="ink-smudge" />
        <div className="ink-smudge" style={{ width: '60px' }} />
        <div className="ink-smudge" />
      </div>

      {/* Link to all articles */}
      <div className="text-center mt-6">
        <Link
          to="/films"
          className="font-label text-[0.65rem] font-bold tracking-[0.3em] uppercase hover:underline"
          style={{ color: 'var(--ink-faded)' }}
        >
          VIEW ALL DISPATCHES →
        </Link>
      </div>
    </section>
  );
}
