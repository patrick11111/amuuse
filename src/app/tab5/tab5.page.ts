import { Component, OnInit } from '@angular/core';
import {ModalcardComponent} from '../amuuses/components/modalcard/modalcard.component';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Ta5} from './ta5.model';
import {Tab5Service} from './tab5.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  tab5: Ta5[];
  constructor(
    private tab5Service: Tab5Service,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.tab5 = this.tab5Service.getAllTab5();
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
