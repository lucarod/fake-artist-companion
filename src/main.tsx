import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RootPage } from '@/pages/RootPage';
import { ErrorPage } from '@/pages/ErrorPage';
import { MenuPage } from '@/pages/MenuPage';
import { MainLobbyPage } from '@/pages/MainLobbyPage';
import { CreateLobbyPage } from '@/pages/CreateLobbyPage';
import { JoinLobbyPage } from '@/pages/JoinLobbyPage';
import { GamePage } from '@/pages/GamePage';

import '@/assets/styles/global.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MenuPage />,
        children: [
          {
            path: '/',
            element: <MainLobbyPage />,
          },
          {
            path: '/create',
            element: <CreateLobbyPage />,
          },
          {
            path: '/join',
            element: <JoinLobbyPage />,
          },
        ],
      },
      {
        path: 'game/:lobbyId',
        element: <GamePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
