import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarDetailPageRoutingModule } from './star-detail-routing.module';

import { StarDetailPage } from './star-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarDetailPageRoutingModule
  ],
  declarations: [StarDetailPage]
})
export class StarDetailPageModule {}
