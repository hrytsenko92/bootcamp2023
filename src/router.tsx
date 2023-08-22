import { createBrowserRouter } from 'react-router-dom';
import { Main } from './components/main/Main';
import { Voting } from './components/voting/Voting';
import { Breeds } from './components/breeds/Breeds';
import { Gallery } from './components/gallery/Gallery';
import { Cover } from './components/cover/Cover';
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
        element: <Voting />,
      },
      {
        path: 'breeds',
        element: <Breeds />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
    ],
  },
]);
