import { Component, OnInit } from '@angular/core';
import {StarsDetailsService} from './starsdetails.service';
import {Starsdetail} from './starsdetail.model';
import {ModalcardComponent} from '../component/modalcard/modalcard.component';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector:  'slides-example',
  styleUrls: ['./starsdetails.page.scss'],
  templateUrl: './starsdetails.page.html',
})
export class StarsdetailsPage implements OnInit {
  starsdetails: Starsdetail[];
  slideOpts: any;
  constructor(
    private starsdetailsService: StarsDetailsService,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.starsdetails = this.starsdetailsService.getAllStarsdetails();
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
