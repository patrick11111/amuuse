import { Injectable } from '@angular/core';
import {Ta1} from './ta1.model';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
  private tab1: Ta1[] = [
    {
      id: 'p3',
      title: 'Gfriend',
      imageUrl: 'https://rwjms.rutgers.edu/images/Staff%20Council/General%20Images/who%20we%20are2.png',
      category: 'Dance Group'
    },
    {
      id: 'p4',
      title: 'Houdini',
      imageUrl: 'https://www.pngrepo.com/png/241611/180/magician.png',
      category: 'Magician'
    }
  ];
  constructor() { }

  getAllTab1(){
    return [...this.tab1];
  }

  getTab1(ta1Id: string) {
    return {...this.tab1.find(ta1 => {
        return ta1.id === ta1Id;
      })};
  }
}
