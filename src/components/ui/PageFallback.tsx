export function PageFallback() {
  return (
    <div
      className="flex items-center justify-center min-h-[50vh]"
      style={{ color: 'var(--ink-faded)' }}
    >
      <span className="font-mono text-[0.75rem] tracking-widest animate-pulse">
        LOADING DISPATCH…
      </span>
    </div>
  );
}
