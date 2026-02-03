const BASE = 'http://localhost:3000/api';

const handle = async (res: Response) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status))));

export const fetchGenres = async () => handle(await fetch(`${BASE}/genres`));
export const fetchPosters = async (genreId?: string) => {
  const url = genreId ? `${BASE}/posters?genreId=${genreId}` : `${BASE}/posters`;
  return handle(await fetch(url));
};
export const fetchPosterById = async (id: string) => handle(await fetch(`${BASE}/posters/${id}`));
export const fetchRandomPosters = async (count = 4) => {
  const data = await fetchPosters();
  const items = (data as any).items || data;
  return (items as any[]).sort(() => Math.random() - 0.5).slice(0, count);
};
export const resolvePosterImage = (p: any) => {
  const src = p?.imageUrl || p?.image || p?.image_path || p?.imagePath || p?.url || p?.thumbnail;
  if (!src) return 'https://via.placeholder.com/300x400?text=Plakat';
  if (/^https?:\/\//i.test(src)) return src;
  const origin = 'http://localhost:3000';
  return src.startsWith('/') ? `${origin}${src}` : `${origin}/uploads/${src}`;
};
export const cleanHtml = (s: any) => {
  const str = typeof s === 'string' ? s : '';
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    const text = doc.body.textContent || '';
    return text.replace(/\s+\n/g, '\n').replace(/\n\s+/g, '\n').trim();
  } catch {
    return str.replace(/<[^>]*>/g, '').replace(/\s+\n/g, '\n').replace(/\n\s+/g, '\n').trim();
  }
};
export const getPosterTitle = (p: any) => {
  const t = p?.title || p?.name || p?.originalTitle || p?.displayTitle || p?.posterTitle;
  return typeof t === 'string' && t.trim().length ? t.trim() : 'Ukendt titel';
};
