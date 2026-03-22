export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).toUpperCase();
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateeline(dateString: string): string {
  const date = new Date(dateString);
  const month = date.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

export function getCurrentDateline(): string {
  const now = new Date();
  const weekday = now.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const month   = now.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  const day     = now.getDate();
  const year    = now.getFullYear();
  const hours   = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${weekday}, ${month} ${day}, ${year} · ${hours}:${minutes}`;
}
