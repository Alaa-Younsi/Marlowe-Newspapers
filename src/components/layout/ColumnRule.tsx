interface ColumnRuleProps {
  className?: string;
}

export function ColumnRule({ className = '' }: ColumnRuleProps) {
  return (
    <div
      className={`self-stretch ${className}`}
      style={{ width: '1px', background: 'var(--rule-light)', flexShrink: 0 }}
      aria-hidden="true"
    />
  );
}
