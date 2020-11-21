import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourbookingsPageRoutingModule } from './yourbookings-routing.module';

import { YourbookingsPage } from './yourbookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourbookingsPageRoutingModule
  ],
  declarations: [YourbookingsPage]
})
export class YourbookingsPageModule {}
