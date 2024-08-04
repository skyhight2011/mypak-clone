import * as React from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import SidebarLayout from './layouts/SidebarLayout/index';
import BaseLayout from './layouts/BaseLayout';
import Status404 from './content/pages/Status/Status404';
import Status500 from './content/pages/Status/Status500';
import Overview from './content/overview';
import CommingSoon from './content/pages/Status/CommingSoon';

// Status

// const Status404 = Loader(
//   lazy(() => import('src/content/pages/Status/Status404'))
// );
// const Status500 = Loader(
//   lazy(() => import('src/content/pages/Status/Status500'))
// );
// const StatusComingSoon = Loader(
//   lazy(() => import('src/content/pages/Status/ComingSoon'))
// );
// const StatusMaintenance = Loader(
//   lazy(() => import('src/content/pages/Status/Maintenance'))
// );

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'commingsoon',
            element: <CommingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: []
  }
];

export default routes;
