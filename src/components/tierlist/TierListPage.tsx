import type { TierList } from '../../types';
import { TierRow } from './TierRow';
import { formatDateShort } from '../../utils/dateFormat';

interface TierListPageProps {
  tierList: TierList;
}

export function TierListPage({ tierList }: TierListPageProps) {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
          <h2
            className="font-headline font-bold"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--ink)' }}
          >
            {tierList.label} — VERDICT TABLE
          </h2>
          <span
            className="font-mono text-[0.65rem]"
            style={{ color: 'var(--ink-light)' }}
          >
            Last updated: {formatDateShort(tierList.lastUpdated)}
          </span>
        </div>
        <p
          className="font-editorial italic text-[0.85rem]"
          style={{ color: 'var(--ink-faded)' }}
        >
          {tierList.description}
        </p>
        <p
          className="font-mono text-[0.7rem] mt-1 italic"
          style={{ color: 'var(--ink-light)' }}
        >
          "The rankings are final until further evidence."
        </p>
      </div>

      {/* Tier rows */}
      <div role="region" aria-label={`${tierList.label} tier list`}>
        {tierList.rows.map(row => (
          <TierRow key={row.tier} row={row} />
        ))}
      </div>
    </div>
  );
}
