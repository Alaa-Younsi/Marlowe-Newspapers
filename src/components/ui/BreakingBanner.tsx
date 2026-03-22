interface BreakingBannerProps {
  label?: string;
  className?: string;
}

export function BreakingBanner({ label = 'BREAKING NEWS', className = '' }: BreakingBannerProps) {
  return (
    <span className={`breaking-banner ${className}`}>
      ⬛ {label}
    </span>
  );
}
