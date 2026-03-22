import { useState, useEffect } from 'react';

type Theme = 'day' | 'night';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('gazette-theme');
      return (stored === 'night' ? 'night' : 'day') as Theme;
    }
    return 'day';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'night') {
      root.setAttribute('data-theme', 'night');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('gazette-theme', theme);
  }, [theme]);

  const toggle = () => {
    setTheme(prev => prev === 'day' ? 'night' : 'day');
  };

  return { theme, toggle };
}
