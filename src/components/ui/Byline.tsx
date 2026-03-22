interface BylineProps {
  name?: string;
  title?: string;
  className?: string;
}

export function Byline({ name = 'Alaa Younsi', title = 'Staff Critic', className = '' }: BylineProps) {
  return (
    <span className={`byline ${className}`}>
      By {name} · {title}
    </span>
  );
}
