import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalcardComponent} from '../amuuses/components/modalcard/modalcard.component';
import {Ta4} from './ta4.model';
import {Tab4Service} from './tab4.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  tab4: Ta4[];
  constructor(
    private tab4Service: Tab4Service,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.tab4 = this.tab4Service.getAllTab4();
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
