import { Component, OnInit } from '@angular/core';
import { Yourstarprofile } from '../yourstarprofile.model';
import { YourstarprofilesService } from '../yourstarprofiles.service';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.page.html',
  styleUrls: ['./detail-profile.page.scss'],
})
export class DetailProfilePage implements OnInit {
  selectTabs = 'profile';
  yourstarprofiles: Yourstarprofile[];
  constructor(private yourstarprofilesService: YourstarprofilesService) { }

  ngOnInit() {
    this.yourstarprofiles = this.yourstarprofilesService.getAllYourstarprofiles();
  }

}
