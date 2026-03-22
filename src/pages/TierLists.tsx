import { useState, useRef, type KeyboardEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { tierLists } from '../data/tierLists';
import { TierListPage } from '../components/tierlist/TierListPage';
import { SectionHeader } from '../components/layout/SectionHeader';
import { buildSeoMeta } from '../utils/seo';

const TABS = [
  { id: 'movies', label: 'MOTION PICTURES' },
  { id: 'tv-shows', label: 'TELEVISION' },
  { id: 'anime', label: 'ANIME' },
  { id: 'novels-mangas', label: 'NOVELS' },
  { id: 'characters', label: 'CHARACTERS' },
] as const;

export default function TierLists() {
  const [activeTab, setActiveTab] = useState<string>('movies');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const seo = buildSeoMeta({
    title: 'Tier Lists | Marlowe Newspapers',
    description: 'Definitive rankings across films, TV, anime, novels, and characters by Alaa Younsi.',
  });

  const activeTierList = tierLists.find(t => t.category === activeTab) ?? tierLists[0];

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === 'ArrowRight') {
      const next = (index + 1) % TABS.length;
      setActiveTab(TABS[next].id);
      tabRefs.current[next]?.focus();
    } else if (e.key === 'ArrowLeft') {
      const prev = (index - 1 + TABS.length) % TABS.length;
      setActiveTab(TABS[prev].id);
      tabRefs.current[prev]?.focus();
    } else if (e.key === 'Home') {
      setActiveTab(TABS[0].id);
      tabRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      setActiveTab(TABS[TABS.length - 1].id);
      tabRefs.current[TABS.length - 1]?.focus();
    }
  }

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
          The Rankings
        </h2>
      </div>

      <div className="max-w-broadsheet mx-auto px-4 md:px-8 py-8">
        <SectionHeader left="THE RANKINGS" right="DEFINITIVE VERDICTS" />

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="Tier list categories"
          className="flex flex-wrap gap-0 border-b mb-6"
          style={{ borderColor: 'var(--rule)' }}
        >
          {TABS.map((tab, i) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                id={`tab-${tab.id}`}
                ref={el => { tabRefs.current[i] = el; }}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={e => handleKeyDown(e, i)}
                className="font-label text-[0.7rem] tracking-widest px-4 py-2 transition-colors"
                style={{
                  borderBottom: isActive ? '2px solid var(--red)' : '2px solid transparent',
                  color: isActive ? 'var(--red)' : 'var(--ink-faded)',
                  background: 'transparent',
                  cursor: 'pointer',
                  marginBottom: '-1px',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab panels */}
        {TABS.map(tab => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`tabpanel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={tab.id !== activeTab}
          >
            {tab.id === activeTab && activeTierList && (
              <TierListPage tierList={activeTierList} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
