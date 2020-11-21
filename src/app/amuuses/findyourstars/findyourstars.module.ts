import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindyourstarsPageRoutingModule } from './findyourstars-routing.module';

import { FindyourstarsPage } from './findyourstars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindyourstarsPageRoutingModule
  ],
  declarations: [FindyourstarsPage]
})
export class FindyourstarsPageModule {}
