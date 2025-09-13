'use client';

import { useFilters } from '@/context/FiltersProvider';
import { ButtonFilter } from '../ButtonFilter';
import { ButtonTheme } from '../ButtonTheme';
import { ButtonHome } from '../ButtonHome';

export const Header = () => {
  const { openFilters } = useFilters(); // Hook do contexto de filtros

  return (
    <header className='w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Lado esquerdo - Botão Home */}
          <ButtonHome />

          {/* Lado direito - Botões de Filtros e Dark Mode */}
          <div className='flex items-center space-x-2'>
            <ButtonFilter onClick={openFilters} />
            <ButtonTheme />
          </div>
        </div>
      </nav>
    </header>
  );
};
