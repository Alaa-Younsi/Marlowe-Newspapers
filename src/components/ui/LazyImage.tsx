import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function LazyImage({ src, alt, className = '', width, height, fetchPriority }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={fetchPriority === 'high' ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={fetchPriority}
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
    />
  );
}
