import { IRoute } from 'types/general';
import { AppLayout } from 'layouts';
import { Home, About } from 'pages';

const routes: Array<IRoute> = [
  {
    path: '/about',
    layout: AppLayout,
    component: About
  },
  {
    path: '/',
    layout: AppLayout,
    component: Home
  }
];

export default routes;
