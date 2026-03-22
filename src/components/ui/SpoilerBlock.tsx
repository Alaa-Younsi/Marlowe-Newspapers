import { useState } from 'react';

interface SpoilerBlockProps {
  children: string;
  label?: string;
}

export function SpoilerBlock({ children, label = '⚠ CLASSIFIED — SPOILERS WITHIN' }: SpoilerBlockProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className="my-6 p-4 column-span-all"
      style={{
        border: '1px solid var(--rule-light)',
        borderLeft: '3px solid var(--red)',
      }}
    >
      <div
        className="font-label font-bold text-[0.6rem] tracking-[0.3em] mb-2"
        style={{ color: 'var(--red)' }}
      >
        {label}
      </div>
      <div
        className={`font-body text-sm ${revealed ? 'spoiler-clear' : 'spoiler-blur'}`}
        onClick={() => setRevealed(true)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setRevealed(true)}
        aria-label={revealed ? 'Spoiler revealed' : 'Click to reveal spoiler'}
        style={{ color: 'var(--ink-faded)' }}
      >
        {children}
        {!revealed && (
          <div className="text-center mt-2 font-label text-[0.6rem] tracking-widest" style={{ filter: 'none', color: 'var(--ink-light)' }}>
            CLICK TO REVEAL
          </div>
        )}
      </div>
    </div>
  );
}
