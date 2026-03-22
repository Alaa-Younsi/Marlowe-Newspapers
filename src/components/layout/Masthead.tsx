import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { getCurrentDateline } from '../../utils/dateFormat';
import { getArticleCount } from '../../data/articles';
import { useTheme } from '../../hooks/useTheme';

// ── Language switcher ────────────────────────────────────────
const LANGS = ['en', 'fr', 'de'] as const;
type Lang = (typeof LANGS)[number];
const LANG_LABELS: Record<Lang, string> = { en: '🇬🇧 EN', fr: '🇫🇷 FR', de: '🇩🇪 DE' };

function getCookieLang(): Lang {
  try {
    const m = document.cookie.match(/googtrans=([^;]+)/);
    if (m) {
      const v = decodeURIComponent(m[1]);
      if (v.endsWith('/fr')) return 'fr';
      if (v.endsWith('/de')) return 'de';
    }
  } catch { /* no cookie */ }
  return 'en';
}

function applyLang(lang: Lang) {
  const val = lang === 'en' ? '/en/en' : `/en/${lang}`;
  document.cookie = `googtrans=${val}; path=/`;
  try {
    document.cookie = `googtrans=${val}; path=/; domain=${window.location.hostname}`;
  } catch { /* cross-origin */ }
  window.location.reload();
}
// ─────────────────────────────────────────────────────────────

const navLinks = [
  { label: 'Dispatches', path: '/news' },
  { label: 'Films', path: '/films' },
  { label: 'Television', path: '/television' },
  { label: 'Anime', path: '/anime' },
  { label: 'Novels & Manga', path: '/novels-manga' },
  { label: 'Tier Lists', path: '/tier-lists' },
  { label: 'About', path: '/about' },
];

export function Masthead() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();
  const [dateline, setDateline] = useState(getCurrentDateline);
  const [lang, setLang] = useState<Lang>(getCookieLang);
  const articleCount = getArticleCount();

  // Update clock every minute so the time stays accurate
  useEffect(() => {
    const id = setInterval(() => setDateline(getCurrentDateline()), 60_000);
    return () => clearInterval(id);
  }, []);

  const cycleLang = () => {
    const next = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
    setLang(next);
    applyLang(next);
  };

  return (
    <header>
      {/* Hidden Google Translate mount point — styled elsewhere */}
      <div id="google_translate_element" aria-hidden="true" style={{ display: 'none' }} />

      {/* Dateline strip */}
      <div
        className="px-4 md:px-8 py-1 flex items-center justify-between"
        style={{ borderBottom: '1px solid var(--rule-light)' }}
      >
        <span className="font-mono text-[0.6rem] tracking-wide uppercase" style={{ color: 'var(--ink-faded)' }}>
          {dateline}
        </span>
        <span className="font-mono text-[0.6rem] tracking-wide uppercase" style={{ color: 'var(--ink-faded)' }}>
          VOL. I, NO. {articleCount} · PRICE: ONE OPINION
        </span>
      </div>

      {/* Triple rule */}
      <div className="press-rule-triple mx-4 md:mx-8" />

      {/* Masthead title */}
      <div className="text-center px-4 py-4 md:py-6">
        <Link to="/" aria-label="Marlowe Newspapers — Home">
          <h1
            className="font-blackletter"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              color: 'var(--ink)',
              lineHeight: 1.0,
            }}
          >
            Marlowe Newspapers
          </h1>
        </Link>
      </div>

      {/* Triple rule */}
      <div className="press-rule-triple mx-4 md:mx-8" />

      {/* Tagline and controls */}
      <div className="px-4 md:px-8 py-2 flex items-center justify-between" style={{ borderBottom: '1px solid var(--rule-light)' }}>
        <p
          className="font-editorial italic text-[0.85rem]"
          style={{ color: 'var(--ink-faded)' }}
        >
          "Through fog and shadow, stories find their truth."
        </p>
        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
          <button
            className="edition-toggle"
            onClick={cycleLang}
            aria-label={`Language: ${lang.toUpperCase()}. Click to switch.`}
            title="Switch language"
          >
            {LANG_LABELS[lang]}
          </button>
          <button
            className="edition-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'day' ? 'Night' : 'Day'} Edition`}
          >
            {theme === 'day' ? '🌙 NIGHT EDITION' : '☀ DAY EDITION'}
          </button>
        </div>
      </div>

      {/* Navigation — sticky */}
      <nav
        className="sticky top-0 z-50 px-4 md:px-8"
        style={{
          backgroundColor: 'var(--paper)',
          borderTop: '1px solid var(--rule-light)',
          borderBottom: '3px solid var(--ink)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
        aria-label="Main navigation"
      >
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-center gap-0 py-3 flex-wrap">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <span key={link.path} className="flex items-center">
                {i > 0 && (
                  <span
                    className="font-label text-[0.65rem] mx-4"
                    style={{ color: 'var(--rule-light)' }}
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
                <Link
                  to={link.path}
                  className={`font-label text-[0.72rem] font-bold tracking-[0.3em] uppercase transition-colors${isActive ? ' nav-active' : ''}`}
                  style={{
                    color: isActive ? 'var(--ink)' : 'var(--ink-faded)',
                    padding: '0.25rem 0',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--red)'; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--ink-faded)'; }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </span>
            );
          })}
        </div>

        {/* Mobile nav toggle */}
        <div className="flex md:hidden items-center justify-between py-2">
          <span className="font-label text-[0.65rem] tracking-widest uppercase" style={{ color: 'var(--ink-faded)' }}>
            NAVIGATION
          </span>
          <button
            className="p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="text-center mb-8">
            <span
              className="font-blackletter"
              style={{ fontSize: '2rem', color: 'var(--ink)' }}
            >
              Marlowe Newspapers
            </span>
          </div>
          {navLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`font-label text-[0.9rem] font-bold tracking-[0.35em] uppercase ${isActive ? 'nav-active' : ''}`}
                style={{ color: 'var(--ink)' }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
