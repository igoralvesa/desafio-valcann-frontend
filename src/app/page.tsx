'use client';

import { FiltersDrawer } from '@/components/FiltersDrawer';
import { Gallery } from '@/components/Gallery';

export default function Page() {
  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6'>
      <FiltersDrawer />
      <Gallery />
    </main>
  );
}
