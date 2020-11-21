import { Injectable } from '@angular/core';
import {Yourbooking} from './yourbooking.model';

@Injectable({
  providedIn: 'root'
})
export class YourbookingsService {
  private yourbookings: Yourbooking[] = [
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

  getAllYourbookings(){
    return [...this.yourbookings];
  }

  getYourbookings(yourbookingId: string) {
    return {...this.yourbookings.find(yourbooking => {
        return yourbooking.id === yourbookingId;
      })};
  }
}
