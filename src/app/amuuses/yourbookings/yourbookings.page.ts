import { Component, OnInit } from '@angular/core';

import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalcardComponent} from '../components/modalcard/modalcard.component';
import {Yourbooking} from './yourbooking.model';
import {YourbookingsService} from './yourbookings.service';

@Component({
  selector: 'app-yourbookings',
  templateUrl: './yourbookings.page.html',
  styleUrls: ['./yourbookings.page.scss'],
})
export class YourbookingsPage implements OnInit {
  yourbookings: Yourbooking[];
  constructor(
    private yourbookingsService: YourbookingsService,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.yourbookings = this.yourbookingsService.getAllYourbookings();
  }

  async presentGrid() {
    const modal = await this.modalCtrl.create({
      component: ModalcardComponent,
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });
    return await modal.present();
  }
}
