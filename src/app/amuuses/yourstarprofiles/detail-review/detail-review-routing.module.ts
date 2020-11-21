import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailReviewPage } from './detail-review.page';

const routes: Routes = [
  {
    path: '',
    component: DetailReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailReviewPageRoutingModule {}
