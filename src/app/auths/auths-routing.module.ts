import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthsPage } from './auths.page';

const routes: Routes = [
  {
    path: '',
    component: AuthsPage
  },
  {
    path: 'becomeastars',
    loadChildren: () => import('./becomeastars/becomeastars.module').then( m => m.BecomeastarsPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('./profiles/profiles.module').then( m => m.ProfilesPageModule)
  },
  {
    path: 'starsdetails',
    loadChildren: () => import('./starsdetails/starsdetails.module').then( m => m.StarsdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthsPageRoutingModule {}
