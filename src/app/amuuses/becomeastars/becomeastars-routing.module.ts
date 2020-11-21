import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BecomeastarsPage } from './becomeastars.page';

const routes: Routes = [
  {
    path: '',
    component: BecomeastarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecomeastarsPageRoutingModule {}
