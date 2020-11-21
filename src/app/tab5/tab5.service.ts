import { Injectable } from '@angular/core';
import {Ta5} from './ta5.model';

@Injectable({
  providedIn: 'root'
})
export class Tab5Service {
  private tab5: Ta5[] = [
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

  getAllTab5(){
    return [...this.tab5];
  }

  getTab5(ta5Id: string) {
    return {...this.tab5.find(ta5 => {
        return ta5.id === ta5Id;
      })};
  }
}
