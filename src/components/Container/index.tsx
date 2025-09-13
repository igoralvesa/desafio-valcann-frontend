type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 min-h-screen pt-20'>
      <div className='max-w-screen-lg mx-auto px-8'>{children}</div>
    </div>
  );
}
