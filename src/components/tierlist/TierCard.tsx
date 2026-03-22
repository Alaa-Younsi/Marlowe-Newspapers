import type { TierItem } from '../../types';
import { LazyImage } from '../ui/LazyImage';

interface TierCardProps {
  item: TierItem;
}

export function TierCard({ item }: TierCardProps) {
  return (
    <div
      className="flex-shrink-0 transition-transform duration-200 hover:-translate-y-1 cursor-default group"
      style={{ width: '120px' }}
    >
      {/* Image */}
      <div
        className="halftone-img-wrap"
        style={{
          width: '120px',
          height: '160px',
          overflow: 'hidden',
          borderTop: '2px solid var(--rule-light)',
        }}
      >
        <div
          className="w-full h-full relative overflow-hidden group-hover:border-t-2"
          style={{
            borderTop: '2px solid transparent',
            transition: 'border-color 0.2s',
          }}
        >
          <LazyImage
            src={item.image}
            alt={item.imageAlt}
            className="halftone-img w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div
        style={{
          borderTop: '1px solid var(--rule-light)',
          paddingTop: '0.3rem',
        }}
      >
        <p
          className="font-headline font-bold"
          style={{
            fontSize: '0.67rem',
            lineHeight: 1.3,
            color: 'var(--ink)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.title}
        </p>
        {item.year && (
          <p
            className="font-mono mt-0"
            style={{ fontSize: '0.6rem', color: 'var(--ink-light)' }}
          >
            ({item.year})
          </p>
        )}
        {item.note && (
          <p
            className="font-editorial italic mt-1"
            style={{
              fontSize: '0.6rem',
              color: 'var(--ink-faded)',
              lineHeight: 1.35,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {item.note}
          </p>
        )}
      </div>
    </div>
  );
}
