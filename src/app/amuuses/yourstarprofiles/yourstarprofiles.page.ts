import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalcardComponent} from '../components/modalcard/modalcard.component';
import {Yourstarprofile} from './yourstarprofile.model';
import {YourstarprofilesService} from './yourstarprofiles.service';

@Component({
  selector: 'app-yourstarprofiles',
  templateUrl: './yourstarprofiles.page.html',
  styleUrls: ['./yourstarprofiles.page.scss'],
})
export class YourstarprofilesPage implements OnInit {
  yourstarprofiles: Yourstarprofile[];
  constructor(
    private yourstarprofilesService: YourstarprofilesService,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.yourstarprofiles = this.yourstarprofilesService.getAllYourstarprofiles();
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
