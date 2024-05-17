import { createBrowserRouter } from 'react-router-dom';
import { RootPage } from '~/pages/root';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <RootPage />,
  },
]);
