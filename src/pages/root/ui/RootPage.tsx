import { Outlet } from 'react-router-dom';
import { Toaster } from '~/shared/ui/sonner';

import { Header } from '~/widgets/header';

export function RootPage() {
  return (
    <div className="m-auto flex max-w-screen-lg flex-col justify-center">
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster richColors position="top-center" />
    </div>
  );
}
