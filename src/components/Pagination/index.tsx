'use client';

import { useEffect } from 'react';

type PaginationProps = {
  page: number;
  hasMore: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export const Pagination = ({
  page,
  hasMore,
  onPrev,
  onNext,
}: PaginationProps) => {
  const canGoPrev = page > 1;
  const canGoNext = hasMore;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <nav
      className='flex items-center justify-center gap-3 mt-2'
      aria-label='Paginação das fotos'
    >
      <button
        type='button'
        onClick={onPrev}
        disabled={!canGoPrev}
        className='rounded-md border px-3 py-2 text-sm disabled:opacity-50 dark:border-zinc-700 cursor-pointer'
        aria-label='Página anterior'
      >
        ← Anterior
      </button>

      <span
        className='text-sm text-gray-600 dark:text-gray-300'
        aria-live='polite'
      >
        Página {page}
      </span>

      <button
        type='button'
        onClick={onNext}
        disabled={!canGoNext}
        className='rounded-md border px-3 py-2 text-sm disabled:opacity-50 dark:border-zinc-700 cursor-pointer'
        aria-label='Próxima página'
      >
        Próxima →
      </button>
    </nav>
  );
};
