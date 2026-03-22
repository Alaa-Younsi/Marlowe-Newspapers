import { createElement, lazy, Suspense, type ElementType } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from './components/layout/Root';
import { PageFallback } from './components/ui/PageFallback';

// Lowercase names so react-refresh does not treat these as component declarations
const homePage     = lazy(() => import('./pages/Home'));
const moviesPage   = lazy(() => import('./pages/Movies'));
const tvPage       = lazy(() => import('./pages/TVShows'));
const animePage    = lazy(() => import('./pages/Anime'));
const novelsPage   = lazy(() => import('./pages/NovelsMangas'));
const tierPage     = lazy(() => import('./pages/TierLists'));
const articlePage  = lazy(() => import('./pages/ArticlePage'));
const newsPage     = lazy(() => import('./pages/News'));
const aboutPage    = lazy(() => import('./pages/About'));
const notFoundPage = lazy(() => import('./pages/NotFound'));

// No JSX in this file — createElement only, so Fast Refresh never warns here
function suspend(Page: ElementType) {
  return createElement(Suspense, { fallback: createElement(PageFallback) }, createElement(Page));
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: createElement(Root),
    children: [
      { index: true,              element: suspend(homePage) },
      { path: 'films',            element: suspend(moviesPage) },
      { path: 'television',       element: suspend(tvPage) },
      { path: 'anime',            element: suspend(animePage) },
      { path: 'novels-manga',     element: suspend(novelsPage) },
      { path: 'tier-lists',       element: suspend(tierPage) },
      { path: 'news',              element: suspend(newsPage) },
      { path: 'article/:slug',    element: suspend(articlePage) },
      { path: 'about',            element: suspend(aboutPage) },
      { path: '*',                element: suspend(notFoundPage) },
    ],
  },
]);
