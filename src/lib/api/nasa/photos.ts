import { nasaRequest } from './client';
import { MarsPhotosResponse, Photo, PhotoParams } from './types';
import { roverPhotosUrl } from './url';
import { isCameraSupportedByRover, isValidEarthDate } from './validators';

/**
 * Busca fotos do Mars Rover Photos API (NASA)
 */
export async function fetchPhotos({
  earth_date,
  page,
  camera,
  rover,
}: PhotoParams): Promise<Photo[]> {
  // validação do formato da data
  if (!isValidEarthDate(earth_date)) {
    throw new Error('Data inválida. Use o formato YYYY-MM-DD.');
  }

  // validação se a câmera é suportada pelo rover
  if (camera && !isCameraSupportedByRover(rover, camera)) {
    throw new Error(`A câmera ${camera} não é suportada pelo rover ${rover}.`);
  }

  // requisição à API
  const url = roverPhotosUrl({ earth_date, page, camera, rover });
  const data = (await nasaRequest(url)) as MarsPhotosResponse;
  return data.photos || [];
}
