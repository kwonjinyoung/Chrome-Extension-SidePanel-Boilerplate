/**
 * 관련 기획서:
 * - /기획/라우팅_기획.md
 * - /기획/프로젝트_메인기획.md
 * - /기획/사이드패널_URL_기획.md
 */
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
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <HomePage />,
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
