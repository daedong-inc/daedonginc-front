import { createBrowserRouter } from 'react-router-dom';
import ROUTE from './route';
// pages
import App from 'App';
import Main from '@pages/Main';
import Search from '@pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: ROUTE.MAIN,
        element: <Main />,
      },
      {
        path: ROUTE.SEARCH,
        element: <Search />,
      },
    ],
  },
]);

export default router;

// {
//   path: 'status',
//   children: [
//     {
//       path: '',
//       element: <Navigate to="404" replace />
//     },
//     {
//       path: '404',
//       element: <Status404 />
//     },
//     {
//       path: '500',
//       element: <Status500 />
//     },
//   ]
// },
// {
//   path: '*',
//   element: <Status404 />
// }
