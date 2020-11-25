import { Injectable } from '@angular/core';
import {Booking} from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private bookings: Booking[] = [
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

  getAllBookings(){
    return [...this.bookings];
  }

  getBookings(bookingId: string) {
    return {...this.bookings.find(booking => {
        return booking.id === bookingId;
      })};
  }
}
