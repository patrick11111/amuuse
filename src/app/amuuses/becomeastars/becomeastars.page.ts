import { Component, OnInit } from '@angular/core';
import {ModalcardComponent} from '../components/modalcard/modalcard.component';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {BecomeastarsService} from './becomeastars.service';
import {Becomeastar} from './becomeastar.model';

@Component({
  selector: 'app-becomeastars',
  templateUrl: './becomeastars.page.html',
  styleUrls: ['./becomeastars.page.scss'],
})
export class BecomeastarsPage implements OnInit {
  becomeastars: Becomeastar[];
  constructor(
    private becomeastarsService: BecomeastarsService,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.becomeastars = this.becomeastarsService.getAllBecomeastars();
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
