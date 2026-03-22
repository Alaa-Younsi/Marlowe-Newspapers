import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface InkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'solid' | 'outline';
  as?: 'button' | 'a';
  href?: string;
}

export function InkButton({ children, variant = 'outline', className = '', ...props }: InkButtonProps) {
  const base =
    'font-label text-[0.7rem] font-bold tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-red';

  const styles =
    variant === 'solid'
      ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)] hover:bg-transparent hover:text-[var(--ink)]'
      : 'bg-transparent text-[var(--ink)] border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]';

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
