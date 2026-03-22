import { useState, useMemo } from 'react';
import type { Article } from '../types';

export function useSearch(articles: Article[]) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return articles;
    const q = query.toLowerCase();
    return articles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.synopsis.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [query, articles]);

  return { query, setQuery, results };
}
