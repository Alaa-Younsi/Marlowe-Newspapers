interface PullQuoteProps {
  children: string;
  className?: string;
}

export function PullQuote({ children, className = '' }: PullQuoteProps) {
  return (
    <blockquote className={`pull-quote column-span-all ${className}`}>
      {children}
    </blockquote>
  );
}
