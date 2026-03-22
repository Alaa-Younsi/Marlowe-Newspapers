import { Link } from 'react-router-dom';

const footerAds = [
  { heading: 'LOST',     body: 'One sense of optimism. Last seen in 1974, somewhere near a cinema. If found, do not return. — A.Y.' },
  { heading: 'FOR SALE', body: 'Secondhand opinions on cinema. Lightly used. Some wear on the cynicism. All perspectives final.' },
  { heading: 'NOTICE',   body: 'This publication accepts no advertising from studios, streaming platforms, or anyone with an agenda. Our only agenda is the work.' },
  { heading: 'URGENT',   body: 'Seeking readers who finish what they start. Especially films. Especially the slow ones.' },
];

const navLinks = [
  { label: 'Dispatches', path: '/news' },
  { label: 'Films', path: '/films' },
  { label: 'Television', path: '/television' },
  { label: 'Anime', path: '/anime' },
  { label: 'Novels & Manga', path: '/novels-manga' },
  { label: 'Tier Lists', path: '/tier-lists' },
  { label: 'About', path: '/about' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#111111', color: '#e8e4d8' }}>
      <div className="max-w-broadsheet mx-auto px-4 md:px-8 py-10">
        {/* Masthead */}
        <div className="text-center mb-6">
          <span
            className="font-blackletter"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', color: '#e8e4d8' }}
          >
            Marlowe Newspapers
          </span>
        </div>

        <div
          className="press-rule-heavy mb-8"
          style={{ borderColor: 'rgba(232,228,216,0.2)' }}
        />

        {/* Three-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Classifieds */}
          <div>
            <div
              className="font-label font-bold text-[0.6rem] tracking-[0.3em] uppercase mb-3 pb-1"
              style={{ borderBottom: '1px solid rgba(232,228,216,0.2)', color: 'rgba(232,228,216,0.5)' }}
            >
              CLASSIFIEDS
            </div>
            <div
              className="font-mono text-[0.7rem] leading-relaxed space-y-3"
              style={{
                border: '1px solid rgba(232,228,216,0.15)',
                padding: '0.75rem',
                color: 'rgba(232,228,216,0.75)',
              }}
            >
              {footerAds.map((ad, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div style={{ borderTop: '1px solid rgba(232,228,216,0.1)', marginBottom: '0.75rem' }} />
                  )}
                  <span className="font-bold" style={{ color: 'rgba(232,228,216,0.95)' }}>
                    {ad.heading}:{' '}
                  </span>
                  {ad.body}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="font-label font-bold text-[0.6rem] tracking-[0.3em] uppercase mb-3 pb-1"
              style={{ borderBottom: '1px solid rgba(232,228,216,0.2)', color: 'rgba(232,228,216,0.5)' }}
            >
              SECTIONS
            </div>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="font-label text-[0.7rem] tracking-wider uppercase transition-opacity hover:opacity-100"
                      style={{ color: 'rgba(232,228,216,0.65)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Publication info */}
          <div>
            <div
              className="font-label font-bold text-[0.6rem] tracking-[0.3em] uppercase mb-3 pb-1"
              style={{ borderBottom: '1px solid rgba(232,228,216,0.2)', color: 'rgba(232,228,216,0.5)' }}
            >
              PUBLICATION INFO
            </div>
            <div className="font-mono text-[0.7rem] space-y-1" style={{ color: 'rgba(232,228,216,0.65)' }}>
              <div>Vol. I · Algiers</div>
              <div>Est. MMXXV</div>
              <div>Chief Critic: A. Younsi</div>
              <div>Price: One Opinion</div>
              <div className="pt-2" style={{ borderTop: '1px solid rgba(232,228,216,0.15)' }}>
                "Every review is a filed report.<br />
                Every verdict is final<br />
                until further evidence."
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          className="mt-8 pt-4"
          style={{ borderTop: '1px solid rgba(232,228,216,0.15)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p
              className="font-editorial italic text-[0.75rem] text-center"
              style={{ color: 'rgba(232,228,216,0.45)' }}
            >
              "All reviews are final. The detective has gone home."
            </p>
            <span className="font-mono text-[0.65rem]" style={{ color: 'rgba(232,228,216,0.3)' }}>
              {year}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
