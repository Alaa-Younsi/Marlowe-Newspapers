interface ClassifiedAdProps {
  ads?: Array<{ heading?: string; body: string }>;
  className?: string;
}

const defaultAds = [
  {
    heading: 'LOST',
    body: 'One sense of optimism. Last seen in 1974, somewhere near a cinema. If found, do not return. — A.Y.',
  },
  {
    heading: 'WANTED',
    body: 'Stories that earn their endings. Apply within. No genre restrictions. Sentimentality will be prosecuted.',
  },
  {
    heading: 'FOR RENT',
    body: 'One detective\'s perspective on all things cinematic. Rates: one opinion per review. Non-negotiable.',
  },
];

export function ClassifiedAd({ ads = defaultAds, className = '' }: ClassifiedAdProps) {
  return (
    <div className={`classified ${className}`}>
      <div
        className="font-label font-bold text-[0.6rem] tracking-[0.3em] uppercase mb-2 pb-1"
        style={{ borderBottom: '1px solid var(--rule-light)' }}
      >
        CLASSIFIEDS
      </div>
      {ads.map((ad, i) => (
        <div key={i}>
          {i > 0 && (
            <div
              className="my-2"
              style={{ borderTop: '1px solid var(--rule-light)' }}
            />
          )}
          {ad.heading && (
            <span className="font-bold uppercase">{ad.heading}: </span>
          )}
          <span>{ad.body}</span>
        </div>
      ))}
    </div>
  );
}
