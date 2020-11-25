import { Injectable } from '@angular/core';
import {Becomeastar} from './becomeastar.model';

@Injectable({
  providedIn: 'root'
})
export class BecomeastarsService {
  private becomeastars: Becomeastar[] = [
    {
      id: 'p1',
      title: 'K-wave',
      imageUrl: 'https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Man-16-icon.png',
      category: 'Korean Dance Group'
    },
    {
      id: 'p2',
      title: 'Backstreet Guys',
      imageUrl: 'https://international-home.net/wp-content/uploads/2020/01/146031.png',
      category: 'Band Group'
    }
  ];
  constructor() { }

  getAllBecomeastars(){
    return [...this.becomeastars];
  }

  getBecomeastars(becomeastarId: string) {
    return {...this.becomeastars.find(becomeastar => {
        return becomeastar.id === becomeastarId;
      })};
  }
}
