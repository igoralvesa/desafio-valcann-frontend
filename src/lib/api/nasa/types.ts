export type RoverName = 'curiosity' | 'spirit' | 'opportunity';
// export type RoverName = 'perseverance' | 'curiosity' | 'spirit' | 'opportunity';

export type CameraName =
  | 'FHAZ' // curiosity && opportunity && spirit
  | 'RHAZ' // curiosity && opportunity && spirit
  | 'MAST' // curiosity
  | 'CHEMCAM' // curiosity
  | 'MAHLI' // curiosity
  | 'MARDI' // curiosity
  | 'NAVCAM' // curiosity && opportunity && spirit
  | 'PANCAM' // opportunity && spirit
  | 'MINITES'; // opportunity && spirit

export type Photo = {
  id: number;
  img_src: string;
  earth_date: string;
  camera: {
    name: CameraName;
    full_name: string;
  };
  rover: {
    name: RoverName;
  };
};

export type PhotoParams = {
  rover: RoverName;
  earth_date: string; // "2015-6-3"
  page: number; // 1
  camera?: CameraName;
};

export type MarsPhotosResponse = {
  photos: Photo[];
};

// export type RoversManifest = {
//   name: RoverName;
//   landing_date: string; // "2012-08-06"
//   launch_date: string; // "2011-11-26"
//   status: 'active' | 'complete';
//   max_sol: number; // 3532
//   max_date: string; // "2023-05-31"
//   total_photos: number; // 644643
//   cameras: { name: CameraName; full_name: string }[];
// };

// export type RoverManifestResponse = {
//   photo_manifest: RoversManifest;
// };
