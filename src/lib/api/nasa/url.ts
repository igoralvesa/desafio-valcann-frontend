import { BASE_URL, API_KEY } from './constants';
import { PhotoParams } from './types';

/**
 * Monta a URL para buscar fotos do rover
 */
export function roverPhotosUrl({
  earth_date,
  page,
  camera,
  rover,
}: PhotoParams) {
  const url = new URL(`${BASE_URL}/rovers/${rover}/photos`);
  url.searchParams.set('earth_date', earth_date);
  url.searchParams.set('page', String(page));
  url.searchParams.set('api_key', API_KEY);

  if (camera) {
    url.searchParams.set('camera', camera);
  }

  return url.toString();
}
