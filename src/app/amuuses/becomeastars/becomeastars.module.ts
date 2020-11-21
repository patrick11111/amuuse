import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecomeastarsPageRoutingModule } from './becomeastars-routing.module';

import { BecomeastarsPage } from './becomeastars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BecomeastarsPageRoutingModule
  ],
  declarations: [BecomeastarsPage]
})
export class BecomeastarsPageModule {}
