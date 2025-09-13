'use client';

import { useFilters } from '@/context/FiltersProvider';
import { Filters } from '../Filters';

export function FiltersDrawer() {
  const {
    isFiltersOpen,
    closeFilters,
    rover,
    camera,
    earthDate,
    setRover,
    setCamera,
    setEarthDate,
  } = useFilters();

  if (!isFiltersOpen) return null;

  return (
    <div className='fixed inset-0 z-50'>
      {/* Backdrop com blur */}
      <div
        className='absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity h-screen'
        onClick={closeFilters}
      />

      {/* Modal container */}
      <div className='absolute right-0 top-0 h-screen w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl transform transition-transform'>
        {/* Header do modal */}
        <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700'>
          <div className='flex items-center gap-3'>
            {/* Ícone de filtro */}
            <div className='w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center'>
              <svg
                className='w-4 h-4 text-blue-600 dark:text-blue-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z'
                />
              </svg>
            </div>
            <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
              Filtros
            </h2>
          </div>

          {/* Botão de fechar */}
          <button
            className='w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-800 transition-colors'
            onClick={closeFilters}
            aria-label='Fechar filtros'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Conteúdo do modal */}
        <div className='flex-1 overflow-y-auto p-6'>
          <Filters
            rover={rover}
            camera={camera}
            earthDate={earthDate}
            onChangeRover={setRover}
            onChangeCamera={setCamera}
            onChangeEarthDate={setEarthDate}
          />
        </div>

        {/* Footer */}
        <div className='p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'>
          <div className='flex gap-3 justify-end'>
            <button
              className='px-4 py-2 text-sm font-medium 
              text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
              rounded-lg transition-colors shadow-sm cursor-pointer'
              onClick={closeFilters}
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
