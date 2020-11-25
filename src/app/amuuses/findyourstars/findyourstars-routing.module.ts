import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindyourstarsPage } from './findyourstars.page';

const routes: Routes = [
  {
    path: '',
    component: FindyourstarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindyourstarsPageRoutingModule {}
