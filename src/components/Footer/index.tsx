export const Footer = () => {
  return (
    <footer className='bottom-0 left-0 w-full p-4 text-gray-800 dark:text-gray-200 text-center text-sm'>
      <div>
        &copy; {new Date().getFullYear()} Igor Alves Almeida. Todos os direitos
        reservados.
      </div>
      <div className='mt-2 text-xs text-gray-600 dark:text-gray-400'>
        Este site utiliza dados da{' '}
        <a
          href='https://api.nasa.gov/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline'
        >
          API da NASA
        </a>
        .
      </div>
    </footer>
  );
};
