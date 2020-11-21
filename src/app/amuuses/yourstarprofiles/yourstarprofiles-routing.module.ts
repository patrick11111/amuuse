import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourstarprofilesPage } from './yourstarprofiles.page';

const routes: Routes = [
  {
    path: '',
    component: YourstarprofilesPage
  },
  {
    path: 'detail-review',
    loadChildren: () => import('./detail-review/detail-review.module').then( m => m.DetailReviewPageModule)
  },
  {
    path: 'detail-profile',
    loadChildren: () => import('./detail-profile/detail-profile.module').then( m => m.DetailProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourstarprofilesPageRoutingModule {}
