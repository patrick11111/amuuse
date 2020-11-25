import { Component, OnInit } from '@angular/core';
import {Booking} from './booking.model';
import {BookingsService} from './bookings.service';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalcardComponent} from '../component/modalcard/modalcard.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: Booking[];
  constructor(
    private bookingsService: BookingsService,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.bookings = this.bookingsService.getAllBookings();
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
