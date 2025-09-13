'use client';

import { usePhotos } from '@/hooks/usePhotos';
import { SpinLoader } from '../SpinLoader';
import { Pagination } from '../Pagination';
import { useFilters } from '@/context/FiltersProvider';

export const Gallery = () => {
  const { rover, camera, earthDate, page, setPage } = useFilters();

  const { photos, hasMore, isLoading, isError } = usePhotos({
    earth_date: earthDate,
    page,
    camera,
    rover,
  });

  return (
    <div className='flex flex-col gap-8 mb-16'>
      {isLoading ? (
        <SpinLoader />
      ) : isError ? (
        <div className='text-red-500 flex items-center justify-center'>
          Erro ao carregar fotos
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
            {photos.map(photo => {
              const earth_date = photo.earth_date;
              const rover_name = photo.rover.name;
              const cameraInfo = photo.camera;

              return (
                <div
                  className='flex flex-col gap-4 group'
                  key={photo.id}
                >
                  <img
                    src={photo.img_src}
                    alt={`Photo taken by ${rover_name} on ${earth_date}`}
                    className='w-full h-48 object-cover object-center group-hover:scale-105 transition rounded-md'
                    loading='lazy'
                  />
                  <div className='flex flex-col gap-1 sm:justify-center'>
                    <time
                      className='text-sm text-gray-500 dark:text-white'
                      dateTime={earth_date}
                    >
                      {earth_date}
                    </time>
                    <div className='text-sm text-black dark:text-gray-300'>
                      <span className='font-medium capitalize'>
                        {rover_name}
                      </span>{' '}
                      Rover
                    </div>
                    <div className='text-xs text-gray-500 dark:text-gray-400'>
                      {cameraInfo.full_name} ({cameraInfo.name})
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {photos.length === 0 ? (
            <div className='flex items-center justify-center text-gray-500 dark:text-gray-400 text-center'>
              Nenhuma foto encontrada
            </div>
          ) : (
            <Pagination
              page={page}
              hasMore={hasMore}
              onPrev={() => setPage(Math.max(1, page - 1))}
              onNext={() => setPage(page + 1)}
            />
          )}
        </>
      )}
    </div>
  );
};
