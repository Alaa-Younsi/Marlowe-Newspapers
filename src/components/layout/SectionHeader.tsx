interface SectionHeaderProps {
  left: string;
  right?: string;
  className?: string;
}

export function SectionHeader({ left, right, className = '' }: SectionHeaderProps) {
  return (
    <div
      className={`section-header ${className}`}
      data-right={right}
    >
      <span>{left}</span>
    </div>
  );
}
