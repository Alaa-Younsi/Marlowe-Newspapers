export type Category = 'movies' | 'tv-shows' | 'anime' | 'novels-mangas' | 'news';
export type TierLabel = 'S' | 'A' | 'B' | 'C' | 'D';
export type TierCategory = 'movies' | 'tv-shows' | 'anime' | 'novels' | 'characters';

export interface ArticleSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'pullquote' | 'spoiler' | 'list' | 'divider' | 'dateline';
  content: string | string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  headline?: string;
  category: Category;
  coverImage: string;
  coverImageAlt: string;
  cutline?: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  rating: number;
  featured: boolean;
  isBreaking?: boolean;
  edition: string;
  synopsis: string;
  body: ArticleSection[];
  personalTake?: string;
  alternativeEnding?: string;
  recommendation?: string;
  metaDescription: string;
}

export interface TierItem {
  id: string;
  title: string;
  year?: number;
  image: string;
  imageAlt: string;
  note?: string;
}

export interface TierRow {
  tier: TierLabel;
  items: TierItem[];
}

export interface TierList {
  id: string;
  category: TierCategory;
  label: string;
  labelShort: string;
  description: string;
  lastUpdated: string;
  rows: TierRow[];
}

export interface Author {
  name: string;
  alias: string;
  title: string;
  bio: string;
  shortBio: string;
  avatar: string;
  location: string;
  philosophy: string;
  picks: { film: string; anime: string; novel: string; tvShow: string; };
  beliefs: string[];
}
