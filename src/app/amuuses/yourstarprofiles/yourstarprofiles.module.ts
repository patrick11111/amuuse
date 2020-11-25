import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourstarprofilesPageRoutingModule } from './yourstarprofiles-routing.module';

import { YourstarprofilesPage } from './yourstarprofiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourstarprofilesPageRoutingModule
  ],
  declarations: [YourstarprofilesPage]
})
export class YourstarprofilesPageModule {}
