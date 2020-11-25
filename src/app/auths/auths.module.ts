import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthsPageRoutingModule } from './auths-routing.module';

import { AuthsPage } from './auths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthsPageRoutingModule
  ],
  declarations: [AuthsPage]
})
export class AuthsPageModule {}
