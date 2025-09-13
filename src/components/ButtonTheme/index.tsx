'use client';

import { useState, useEffect } from 'react';

export const ButtonTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Verifica o estado inicial do dark mode
    const html = document.documentElement;
    setIsDark(html.classList.contains('dark'));
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    setIsDark(html.classList.contains('dark'));
  }

  return (
    <button
      type='button'
      className='p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'
      onClick={toggleTheme}
      aria-label={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      {isDark ? (
        // Ícone do Sol (Light Mode)
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
          />
        </svg>
      ) : (
        // Ícone da Lua (Dark Mode)
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
          />
        </svg>
      )}
    </button>
  );
};
