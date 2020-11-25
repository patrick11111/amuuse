import { Component, OnInit } from '@angular/core';
import {Profile} from './profile.model';
import {ProfilesService} from './profiles.service';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalcardComponent} from '../component/modalcard/modalcard.component';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  profiles: Profile[];
  constructor(
    private profilesService: ProfilesService,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.profiles = this.profilesService.getAllProfiles();
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
