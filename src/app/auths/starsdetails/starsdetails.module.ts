import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarsdetailsPageRoutingModule } from './starsdetails-routing.module';

import { StarsdetailsPage } from './starsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarsdetailsPageRoutingModule
  ],
  declarations: [StarsdetailsPage]
})
export class StarsdetailsPageModule {}
