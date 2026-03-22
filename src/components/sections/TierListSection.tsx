import { Link } from 'react-router-dom';
import type { TierList } from '../../types';
import { SectionHeader } from '../layout/SectionHeader';
import { TierRow } from '../tierlist/TierRow';

interface TierListSectionProps {
  tierList: TierList;
}

export function TierListSection({ tierList }: TierListSectionProps) {
  const previewRows = tierList.rows.filter(r => r.items.length > 0).slice(0, 3);

  return (
    <section>
      <SectionHeader
        left="THE VERDICT — RANKING THE CANON"
        right={tierList.labelShort}
      />

      <div className="mb-4">
        <p
          className="font-editorial italic text-[0.85rem]"
          style={{ color: 'var(--ink-faded)' }}
        >
          {tierList.description}
        </p>
      </div>

      {previewRows.map(row => (
        <TierRow key={row.tier} row={row} />
      ))}

      <div className="mt-4 text-right">
        <Link
          to="/tier-lists"
          className="font-label text-[0.65rem] font-bold tracking-[0.3em] uppercase hover:underline"
          style={{ color: 'var(--ink-faded)' }}
        >
          VIEW FULL RANKINGS →
        </Link>
      </div>
    </section>
  );
}
