'use client';

import { fetchPhotos, PhotoParams } from '@/lib/api/nasa';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { error } from 'console';

export function usePhotos({ earth_date, page, camera, rover }: PhotoParams) {
  // TanStack Query
  const query = useQuery({
    queryKey: ['photos', { earth_date, page, camera, rover }],
    queryFn: () => fetchPhotos({ earth_date, page, camera, rover }),
    placeholderData: keepPreviousData,
  });

  const photos = query.data ?? [];
  const hasMore = photos.length === 25;

  return {
    photos,
    hasMore,
    isLoading: query.isLoading,
    isError: query.isError,
    // ...query,
  };
}
