interface SeoMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export function buildSeoMeta(meta: SeoMeta): SeoMeta {
  return {
    title: meta.title.includes('Marlowe Newspapers')
      ? meta.title
      : `${meta.title} | Marlowe Newspapers`,
    description: meta.description,
    ogTitle: meta.ogTitle || meta.title,
    ogDescription: meta.ogDescription || meta.description,
    ogImage: meta.ogImage || 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop',
    canonical: meta.canonical,
  };
}

export const defaultSeo: SeoMeta = {
  title: 'Marlowe Newspapers — Cinema, Anime & Literature Reviews',
  description: 'Marlowe Newspapers — personal cinema, anime & literature reviews by Alaa Younsi. Deep analysis, no mercy for bad writing.',
  ogTitle: 'Marlowe Newspapers',
  ogDescription: 'Cinema, anime, novels and tier lists — reviewed with obsession.',
  ogImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop',
};
