import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmuusesPage } from './amuuses.page';

const routes: Routes = [
  {
    path: '',
    component: AmuusesPage
  },
  {
    path: 'logins',
    loadChildren: () => import('./logins/logins.module').then( m => m.LoginsPageModule)
  },
  {
    path: 'signups',
    loadChildren: () => import('./signups/signups.module').then( m => m.SignupsPageModule)
  },
  {
    path: 'findyourstars',
    loadChildren: () => import('./findyourstars/findyourstars.module').then( m => m.FindyourstarsPageModule)
  },
  {
    path: 'yourbookings',
    loadChildren: () => import('./yourbookings/yourbookings.module').then( m => m.YourbookingsPageModule)
  },
  {
    path: 'becomeastars',
    loadChildren: () => import('./becomeastars/becomeastars.module').then( m => m.BecomeastarsPageModule)
  },
  {
    path: 'yourstarprofiles',
    loadChildren: () => import('./yourstarprofiles/yourstarprofiles.module').then( m => m.YourstarprofilesPageModule)
  },
  {
    path: 'helps',
    loadChildren: () => import('./helps/helps.module').then( m => m.HelpsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmuusesPageRoutingModule {}
