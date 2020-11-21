import { Injectable } from '@angular/core';
import {Yourstarprofile} from './yourstarprofile.model';

@Injectable({
  providedIn: 'root'
})
export class YourstarprofilesService {
  private yourstarprofiles: Yourstarprofile[] = [
    {
      id: 'p1',
      title: 'K-wave',
      imageUrl: 'https://international-home.net/wp-content/uploads/2020/01/146031.png',
      category: 'Korean Dance Group'
    },
    {
      id: 'p2',
      title: 'Backstreet Guys',
      imageUrl: 'https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Man-16-icon.png',
      category: 'Band Group'
    }
  ];
  constructor() { }

  getAllYourstarprofiles(){
    return [...this.yourstarprofiles];
  }

  getYourstarprofiles(yourstarprofileId: string) {
    return {...this.yourstarprofiles.find(yourstarprofile => {
        return yourstarprofile.id === yourstarprofileId;
      })};
  }
}
