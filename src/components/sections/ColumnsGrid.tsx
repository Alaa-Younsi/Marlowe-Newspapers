import { motion } from 'framer-motion';
import type { Article } from '../../types';
import { SectionHeader } from '../layout/SectionHeader';
import { NewsCard } from '../ui/NewsCard';

interface ColumnsGridProps {
  articles: Article[];
  sectionTitle?: string;
  sectionRight?: string;
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: 'easeOut' as const,
    },
  }),
};

export function ColumnsGrid({
  articles,
  sectionTitle = 'RECENT DISPATCHES',
  sectionRight,
}: ColumnsGridProps) {
  return (
    <section className="content-auto">
      <SectionHeader
        left={sectionTitle}
        right={sectionRight ?? `${articles.length} REPORTS`}
        className="mb-6 section-header-filled"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            className={i < 2 ? 'md:col-rule' : ''}
          >
            <NewsCard article={article} size="feature" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
