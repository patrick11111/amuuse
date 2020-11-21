import { Component, OnInit } from '@angular/core';
import {ModalcardComponent} from '../amuuses/components/modalcard/modalcard.component';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Ta3} from './ta3.model';
import {Tab3Service} from './tab3.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector:  'slides-example',
  styleUrls: ['./tab3.page.scss'],
  templateUrl: './tab3.page.html',
})
export class Tab3Page implements OnInit {
  tab3: Ta3[];
  slideOpts: any;
  constructor(
    private tab3Service: Tab3Service,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.tab3 = this.tab3Service.getAllTab3();
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

export class SlideExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
