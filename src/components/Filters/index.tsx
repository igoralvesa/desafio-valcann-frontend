'use client';

import { useState, useMemo, useEffect } from 'react';
import { CAMERAS_BY_ROVER, ROVERS } from '@/lib/api/nasa/constants';
import type { RoverName, CameraName } from '@/lib/api/nasa/types';

type FiltersProps = {
  rover: RoverName;
  camera?: CameraName;
  earthDate: string;

  onChangeRover: (r: RoverName) => void;
  onChangeCamera: (c: CameraName | undefined) => void;
  onChangeEarthDate: (d: string) => void;
};

export function Filters({
  rover,
  camera,
  earthDate,
  onChangeRover,
  onChangeCamera,
  onChangeEarthDate,
}: FiltersProps) {
  const [search, setSearch] = useState('');

  const camerasForRover = useMemo(() => CAMERAS_BY_ROVER[rover], [rover]);

  // se trocar rover e a câmera atual não existir nele, reseta a câmera
  useEffect(() => {
    onChangeCamera(undefined);
  }, [rover]);

  const filteredRovers = useMemo(
    () => ROVERS.filter(r => r.toLowerCase().includes(search.toLowerCase())),
    [search],
  );

  const filteredCameras = useMemo(
    () =>
      camerasForRover.filter(c =>
        c.toLowerCase().includes(search.toLowerCase()),
      ),
    [camerasForRover, search],
  );

  return (
    <div className='grid gap-4 sm:grid-cols-4'>
      {/* Campo de busca */}
      <label className='flex flex-col gap-1 text-sm sm:col-span-2'>
        <span className='text-gray-600 dark:text-gray-300'>
          Buscar (Rover ou Câmera)
        </span>
        <input
          type='text'
          placeholder='ex.: curiosity, NAVCAM...'
          className='rounded-md border border-gray-300 bg-white px-3 py-2 dark:bg-zinc-900 dark:border-zinc-700'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </label>

      {/* Rover */}
      <label className='flex flex-col gap-1 text-sm'>
        <span className='text-gray-600 dark:text-gray-300'>Rover</span>
        <select
          className='rounded-md border border-gray-300 bg-white px-3 py-2 dark:bg-zinc-900 dark:border-zinc-700'
          value={rover}
          onChange={e => onChangeRover(e.target.value as RoverName)}
        >
          {filteredRovers.map(r => (
            <option
              key={r}
              value={r}
            >
              {r}
            </option>
          ))}
        </select>
      </label>

      {/* Câmera */}
      <label className='flex flex-col gap-1 text-sm'>
        <span className='text-gray-600 dark:text-gray-300'>
          Câmera (opcional)
        </span>
        <select
          className='rounded-md border border-gray-300 bg-white px-3 py-2 dark:bg-zinc-900 dark:border-zinc-700'
          value={camera ?? ''}
          onChange={e =>
            onChangeCamera(
              (e.target.value || undefined) as CameraName | undefined,
            )
          }
        >
          <option value=''>Todas</option>
          {filteredCameras.map(c => (
            <option
              key={c}
              value={c}
            >
              {c}
            </option>
          ))}
        </select>
      </label>

      {/* Data */}
      <label className='flex flex-col gap-1 text-sm sm:col-span-2'>
        <span className='text-gray-600 dark:text-gray-300'>
          Data (Earth date)
        </span>
        <input
          type='date'
          className='rounded-md border border-gray-300 bg-white px-3 py-2 dark:bg-zinc-900 dark:border-zinc-700'
          value={earthDate}
          onChange={e => onChangeEarthDate(e.target.value)}
        />
      </label>
    </div>
  );
}
