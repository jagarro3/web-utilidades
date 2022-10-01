import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'estadisticas',
        component: Dashboard1Component,
        data: {
          title: 'Estadísticas EPUB',
          urls: [
            { title: 'Estadísticas', url: '/estadisticas' }
          ]
        }
      }
    ]
  }
];
