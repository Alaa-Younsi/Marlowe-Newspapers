import { LazyImage } from './LazyImage';

interface HalftoneImageProps {
  src: string;
  alt: string;
  cutline?: string;
  className?: string;
}

export function HalftoneImage({ src, alt, cutline, className = '' }: HalftoneImageProps) {
  return (
    <figure className={className}>
      <div className="halftone-img-wrap">
        <LazyImage
          src={src}
          alt={alt}
          className="halftone-img w-full h-full object-cover"
        />
      </div>
      {cutline && (
        <figcaption className="cutline">{cutline}</figcaption>
      )}
    </figure>
  );
}
