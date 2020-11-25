import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'amuuses',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'amuuses',
    loadChildren: () => import('./amuuses/amuuses.module').then( m => m.AmuusesPageModule)
  },
  {
    path: 'star-detail',
    loadChildren: () => import('./star/star-detail/star-detail.module').then( m => m.StarDetailPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
