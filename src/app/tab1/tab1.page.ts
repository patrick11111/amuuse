import { Component, OnInit } from '@angular/core';

import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalcardComponent} from '../amuuses/components/modalcard/modalcard.component';
import {Ta1} from './ta1.model';
import {Tab1Service} from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  tab1: Ta1[];
  constructor(
    private tab1Service: Tab1Service,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.tab1 = this.tab1Service.getAllTab1();
  }

  async presentProfile() {
    const modal = await this.modalCtrl.create({
      component: ModalcardComponent,
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });
    return await modal.present();
  }
}
