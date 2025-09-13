type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = '' }: SpinLoaderProps) {
  const classes = ['flex', 'items-center', 'justify-center', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <div className='w-10 h-10 border-5 border-t-transparent border-blue-700 rounded-full animate-spin'></div>
    </div>
  );
}
