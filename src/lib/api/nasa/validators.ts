export function isValidEarthDate(date: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(date); // formato YYYY-MM-DD
}

export function isCameraSupportedByRover(
  rover: string,
  camera: string,
): boolean {
  const roverCameras: Record<string, string[]> = {
    curiosity: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
    opportunity: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
    spirit: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
  };

  return roverCameras[rover]?.includes(camera) ? true : false;
}
