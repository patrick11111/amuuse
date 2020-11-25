import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarsdetailsPage } from './starsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: StarsdetailsPage
  },
  {
    path: 'stars',
    loadChildren: () => import('./stars/stars.module').then( m => m.StarsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarsdetailsPageRoutingModule {}
