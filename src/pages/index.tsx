import Layout from '@components/common/layout';
import HomePage from '@pages/home';
import LoginPage from '@pages/login';
import type { DataRouter } from 'react-router-dom';
import { createMemoryRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/*',
    element: <LoginPage />,
  },
];

const createRouter =
  process.env.NODE_ENV === 'production'
    ? (): DataRouter => {
        return createMemoryRouter(routes);
      }
    : (): DataRouter => {
        return createMemoryRouter(routes);
      };

const router = createRouter();

export default router;
