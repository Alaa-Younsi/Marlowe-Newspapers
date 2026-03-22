import type { TierRow as TierRowType } from '../../types';
import { TierBadge } from '../ui/TierBadge';
import { TierCard } from './TierCard';

interface TierRowProps {
  row: TierRowType;
}

const borderLeftStyle: Record<string, string> = {
  S: '4px solid var(--ink)',
  A: '3px solid var(--ink-faded)',
  B: '2px solid var(--rule-light)',
  C: '1px solid var(--rule-light)',
  D: '1px dashed var(--rule-light)',
};

export function TierRow({ row }: TierRowProps) {
  if (row.items.length === 0) return null;

  return (
    <div
      className="flex items-stretch mb-2"
      style={{
        border: '1px solid var(--rule-light)',
        borderLeft: borderLeftStyle[row.tier] ?? '2px solid var(--rule-light)',
      }}
    >
      {/* Tier label */}
      <div
        className="flex items-center justify-center p-2 flex-shrink-0"
        style={{
          minWidth: '60px',
          borderRight: '1px solid var(--rule-light)',
        }}
      >
        <TierBadge tier={row.tier} size="lg" />
      </div>

      {/* Scrollable items */}
      <div
        className="flex gap-3 p-3 overflow-x-auto"
        role="list"
        aria-label={`Tier ${row.tier} items`}
        style={{ flexGrow: 1, scrollbarWidth: 'thin' }}
      >
        {row.items.map(item => (
          <div key={item.id} role="listitem">
            <TierCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
