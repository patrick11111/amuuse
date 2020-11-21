import { Component, OnInit } from '@angular/core';
import {ModalcardComponent} from '../components/modalcard/modalcard.component';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Findyourstar} from './findyourstar.model';
import {FindyourstarsService} from './findyourstars.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector:  'slides-example',
  styleUrls: ['./findyourstars.page.scss'],
  templateUrl: './findyourstars.page.html',
})
export class FindyourstarsPage implements OnInit {
  findyourstars: Findyourstar[];
  slideOpts: any;
  constructor(
    private findyourstarsService: FindyourstarsService,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.findyourstars = this.findyourstarsService.getAllFindyourstars();
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

export class SlideExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
