import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-signups',
  templateUrl: './signups.page.html',
  styleUrls: ['./signups.page.scss'],
})
export class SignupsPage implements OnInit {
  username: string;
  password: string;
  conpassword: string;
  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams
  ) { }

  ngOnInit() {
  }

  // ionViewDidLoad() {
  //   console.log('IonViewDidLoad SignupsPage');
  // }

  signup(){
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    console.log('Confirm Password: ' + this.conpassword);
  }
  // signup() {
  //   if (this.username.length === 0 || this.password.length === 0 || this.conpassword.length === 0){
  //       alert('Silahkan lengkapi dengan benar');
  //   }
  // }
}
