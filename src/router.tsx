import { createBrowserRouter } from 'react-router-dom';
import { Main } from './components/main/Main';
import { Cover } from './components/cover/Cover';
import { Modal } from './components/modal/Modal';
import { ErrorPage } from './components/errorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Cover />,
      },
      {
        path: 'voting',
        element: <Modal />,
      },
      {
        path: 'breeds',
        element: <Modal />,
      },
      {
        path: 'gallery',
        element: <Modal />,
      },
      {
        path: 'search',
        element: <Modal />,
      },
      {
        path: 'likes',
        element: <Modal />,
      },
      {
        path: 'dislikes',
        element: <Modal />,
      },
      {
        path: 'favourites',
        element: <Modal />,
      },
    ],
  },
]);
