# images/

Drop your article and cover images here.

## Recommended structure

```
public/
└── images/
    ├── articles/
    │   ├── chinatown-1974.jpg
    │   ├── blade-runner-2049.jpg
    │   ├── true-detective-s1.jpg
    │   ├── the-wire.jpg
    │   ├── monster-anime.jpg
    │   ├── vinland-saga.jpg
    │   ├── the-big-sleep.jpg
    │   └── berserk.jpg
    └── og/
        └── default-og.jpg       ← 1200×630 Open Graph image
```

## Format guidance

| Use                | Format  | Max size  |
|--------------------|---------|-----------|
| Article covers     | WebP    | ≤ 200 KB  |
| OG / social share  | JPEG    | ≤ 300 KB  |
| Thumbnails         | WebP    | ≤ 60 KB   |

## How to reference in code

Since these files live in `public/`, reference them as **absolute paths from the root**:

```tsx
coverImage: '/images/articles/chinatown-1974.webp'
```

No import needed — Vite serves `public/` contents at `/` in both dev and prod.
