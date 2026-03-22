import type { TierLabel } from '../../types';

interface TierBadgeProps {
  tier: TierLabel;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function TierBadge({ tier, size = 'md', className = '' }: TierBadgeProps) {
  const sizeClass = {
    sm: 'text-sm w-7 h-7',
    md: 'text-xl w-10 h-10',
    lg: 'text-3xl w-14 h-14',
  }[size];

  return (
    <div
      className={`tier-${tier} ${sizeClass} flex items-center justify-center font-blackletter font-bold flex-shrink-0 ${className}`}
      aria-label={`Tier ${tier}`}
    >
      {tier}
    </div>
  );
}
