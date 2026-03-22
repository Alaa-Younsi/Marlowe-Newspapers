interface DatelineProps {
  location?: string;
  date: string;
  className?: string;
}

export function Dateline({ location, date, className = '' }: DatelineProps) {
  return (
    <span className={`dateline ${className}`}>
      {location ? `${location} — ` : ''}{date}
    </span>
  );
}
