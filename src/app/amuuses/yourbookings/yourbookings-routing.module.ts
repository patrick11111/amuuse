import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YourbookingsPage } from './yourbookings.page';

const routes: Routes = [
  {
    path: '',
    component: YourbookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourbookingsPageRoutingModule {}
