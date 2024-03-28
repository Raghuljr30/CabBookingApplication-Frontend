import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cab } from '../models/Cab';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  displayAllAvailableCabs()
  {
    return this.http.get<Cab[]>(`http://localhost:8080/booking/available-cabs`)
  }


  searchByLocationService(fromLocation:String,toLocation:String)
  {
    return this.http.get<Cab[]>(`http://localhost:8080/booking/bylocation/${fromLocation}/${toLocation}`)
  }

  bookCabService(customerId:number,cabId:number,paymentType:String)
  {
    return this.http.patch(`http://localhost:8080/booking/book/${customerId}/${cabId}/${paymentType}`,null)
  }

  bookingOverService(customerId:number,currentBookingId:number)
  {
    return this.http.patch(`http://localhost:8080/booking/completed/${customerId}/${currentBookingId}`,null)
  }

}
