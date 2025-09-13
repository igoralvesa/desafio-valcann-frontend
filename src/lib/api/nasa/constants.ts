import { CameraName, RoverName } from './types';

export const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1';
export const API_KEY = process.env.NEXT_PUBLIC_NASA_KEY || 'DEMO_KEY';

export const ROVERS: RoverName[] = ['curiosity', 'opportunity', 'spirit'];

export const CAMERAS_BY_ROVER: Record<RoverName, CameraName[]> = {
  curiosity: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
  opportunity: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
  spirit: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
};
