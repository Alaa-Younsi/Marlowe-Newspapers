import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SectionHeader } from '../components/layout/SectionHeader';
import { InkButton } from '../components/ui/InkButton';
import { Dateline } from '../components/ui/Dateline';
import { getCurrentDateline } from '../utils/dateFormat';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Story Not Found | Marlowe Newspapers</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-broadsheet mx-auto px-4 md:px-8 py-16 text-center">
        <SectionHeader left="LATE EDITION" right="CORRECTION &amp; RETRACTION" />

        <div className="my-8">
          <p
            className="font-mono text-[0.75rem] tracking-widest mb-4"
            style={{ color: 'var(--red)' }}
          >
            — PRESS ERROR —
          </p>

          <h1
            className="font-headline leading-tight mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              color: 'var(--ink)',
            }}
          >
            STORY NOT FOUND
          </h1>

          <p
            className="font-body italic mb-2"
            style={{ fontSize: '1.1rem', color: 'var(--ink-faded)', maxWidth: '40ch', margin: '0 auto 1rem' }}
          >
            The dispatch you requested has gone missing from our archives.
          </p>

          <Dateline date={getCurrentDateline()} />
        </div>

        <div className="press-rule max-w-sm mx-auto my-8" />

        <p
          className="font-editorial italic mb-8"
          style={{ fontSize: '1rem', color: 'var(--ink)', maxWidth: '50ch', margin: '0 auto 2rem' }}
        >
          "In this city, stories disappear. Sometimes they were never there to begin with.
          The fog took them. Or someone paid for the silence."
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <InkButton variant="solid">RETURN TO FRONT PAGE</InkButton>
          </Link>
          <Link to="/films">
            <InkButton variant="outline">BROWSE DISPATCHES</InkButton>
          </Link>
        </div>

        {/* Edition stamp at bottom */}
        <p
          className="font-mono text-[0.65rem] tracking-widest mt-16"
          style={{ color: 'var(--ink-faded)' }}
        >
          MARLOWE NEWSPAPERS · ERROR 404 · PAGE NOT IN PRINT
        </p>
      </div>
    </>
  );
}
