import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/epub/estadisticas', pathMatch: 'full' },
      {
        path: 'epub',
        loadChildren: () => import('./dashboards/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
