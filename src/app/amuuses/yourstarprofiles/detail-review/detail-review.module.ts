import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailReviewPageRoutingModule } from './detail-review-routing.module';

import { DetailReviewPage } from './detail-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailReviewPageRoutingModule
  ],
  declarations: [DetailReviewPage]
})
export class DetailReviewPageModule {}
