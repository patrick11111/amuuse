import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {SignupsPage} from '../signups/signups.page';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.page.html',
  styleUrls: ['./logins.page.scss'],
})
export class LoginsPage implements OnInit {
  username: string;
  password: string;
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  login(){
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }

  // goSignup(){
  //   this.navCtrl.push(SignupsPage);
  // }
}
