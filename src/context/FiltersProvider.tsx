'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { RoverName, CameraName } from '@/lib/api/nasa/types';
import { CAMERAS_BY_ROVER } from '@/lib/api/nasa/constants';

type FiltersContextValue = {
  // estados
  rover: RoverName;
  camera?: CameraName;
  earthDate: string;
  page: number;

  // setters
  setRover: (r: RoverName) => void;
  setCamera: (c: CameraName | undefined) => void;
  setEarthDate: (d: string) => void;
  setPage: (p: number) => void;

  // drawer de filtros
  isFiltersOpen: boolean;
  openFilters: () => void;
  closeFilters: () => void;

  // reset - ADICIONADO AQUI
  resetFilters: () => void;
};

const FiltersContext = createContext<FiltersContextValue | null>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  // valores iniciais (ajuste se quiser)
  const [rover, setRover] = useState<RoverName>('curiosity');
  const [camera, setCamera] = useState<CameraName | undefined>(undefined);
  const [earthDate, setEarthDate] = useState('2015-06-02');
  const [page, setPage] = useState<number>(1);

  // abrir/fechar drawer
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const openFilters = () => setIsFiltersOpen(true);
  const closeFilters = () => setIsFiltersOpen(false);

  const resetFilters = () => {
    setRover('curiosity');
    setCamera(undefined);
    setEarthDate('2015-06-02');
    setPage(1);
    closeFilters();
  };

  // reset de página quando filtros mudam
  useEffect(() => {
    setPage(1);
  }, [rover, camera, earthDate]);

  // se trocar rover e a câmera atual não existir nele, limpa
  useEffect(() => {
    if (camera && !CAMERAS_BY_ROVER[rover].includes(camera)) {
      setCamera(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rover]);

  const value = useMemo<FiltersContextValue>(
    () => ({
      rover,
      camera,
      earthDate,
      page,
      setRover,
      setCamera,
      setEarthDate,
      setPage,
      isFiltersOpen,
      openFilters,
      closeFilters,
      resetFilters,
    }),
    [rover, camera, earthDate, page, isFiltersOpen],
  );

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}

export function useFilters() {
  const ctx = useContext(FiltersContext);
  if (!ctx)
    throw new Error('useFilters deve ser usado dentro de <FiltersProvider>');
  return ctx;
}
