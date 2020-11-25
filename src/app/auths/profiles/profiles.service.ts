import { Injectable } from '@angular/core';
import {Profile} from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private profiles: Profile[] = [
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

  getAllProfiles(){
    return [...this.profiles];
  }

  getProfiles(profileId: string) {
    return {...this.profiles.find(profile => {
        return profile.id === profileId;
      })};
  }
}
