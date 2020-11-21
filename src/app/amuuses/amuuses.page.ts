import { Component, OnInit } from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-amuuses',
  templateUrl: './amuuses.page.html',
  styleUrls: ['./amuuses.page.scss'],
})
export class AmuusesPage implements OnInit {

  constructor(
    // public loadingController: LoadingController,
    // public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     cssClass: 'buat-loading',
  //     message: 'Loading...',
  //     duration: 20000
  //   });
  //   await loading.present();
  //
  //   const { role, data } = await loading.onDidDismiss();
  //   console.log('Loading dismissed!');
  // }
  //
  // loadingPage() {
  //   this.presentLoading().then(() => {
  //     this..loadingPage(this.);
  //     this.router.navigate(['/amuuses']);
  //     this.presentToast();
  //   });
  // }
  //
  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Recipe deleted.',
  //     duration: 2000,
  //     position: 'middle',
  //     color: 'warning'
  //   });
  //   toast.present();
  // }
}
