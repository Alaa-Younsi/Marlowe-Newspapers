import type { Category } from '../types';

export interface CategoryMeta {
  id: Category;
  label: string;
  labelShort: string;
  sectionHeader: string;
  path: string;
  description: string;
}

export const categories: CategoryMeta[] = [
  {
    id: 'movies',
    label: 'Motion Pictures',
    labelShort: 'Films',
    sectionHeader: 'MOTION PICTURES',
    path: '/films',
    description: 'Reviews, analysis, and verdicts on cinema — from noir classics to modern masterworks.',
  },
  {
    id: 'tv-shows',
    label: 'Television',
    labelShort: 'TV',
    sectionHeader: 'TELEVISION',
    path: '/television',
    description: 'The small screen, unshrunk. Long-form storytelling treated with the respect it demands.',
  },
  {
    id: 'anime',
    label: 'Anime',
    labelShort: 'Anime',
    sectionHeader: 'ANIME',
    path: '/anime',
    description: 'Japanese animation as serious artistic medium. No condescension. No apologies.',
  },
  {
    id: 'novels-mangas',
    label: 'Novels & Manga',
    labelShort: 'Print',
    sectionHeader: 'NOVELS & MANGA',
    path: '/novels-manga',
    description: 'The printed word in all its forms. Literature that earns the ink it is printed with.',
  },
];

export function getCategoryMeta(id: Category): CategoryMeta {
  return categories.find(c => c.id === id) ?? categories[0];
}
