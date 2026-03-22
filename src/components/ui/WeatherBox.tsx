export function WeatherBox() {
  return (
    <aside
      className="classified"
      aria-label="Weather report — decorative"
    >
      <div
        className="font-label font-bold text-[0.6rem] tracking-[0.3em] uppercase mb-2 pb-1"
        style={{ borderBottom: '1px solid var(--rule-light)' }}
      >
        WEATHER REPORT
      </div>
      <div className="font-mono text-[0.7rem] leading-relaxed" style={{ color: 'var(--ink-faded)' }}>
        <div>☁ ALGIERS</div>
        <div className="mt-1">
          Overcast with persistent fog until noon. Low visibility after dark.
          A good day to stay in and read.
        </div>
        <div className="mt-2" style={{ borderTop: '1px solid var(--rule-light)', paddingTop: '0.5rem' }}>
          17°C &darr; Chance of rain, like always.
        </div>
        <div className="mt-2 italic" style={{ color: 'var(--ink-light)' }}>
          "The night was dark and damp and someone was going to get hurt."
        </div>
      </div>
    </aside>
  );
}
