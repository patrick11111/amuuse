import { Injectable } from '@angular/core';
import {Ta4} from './ta4.model';

@Injectable({
  providedIn: 'root'
})
export class Tab4Service {
  private tab4: Ta4[] = [
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

  getAllTab4(){
    return [...this.tab4];
  }

  getTab4(ta4Id: string) {
    return {...this.tab4.find(ta4 => {
        return ta4.id === ta4Id;
      })};
  }
}
