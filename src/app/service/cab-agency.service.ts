import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CabAgency } from '../models/CabAgency';
import { Cab } from '../models/Cab';
import { Booking } from '../models/Booking';
import { cabAgencyPassworUpdateRequest } from '../models/CabAgencyPasswordUpdateRequest';
import { CabAgencyMobileNumberUpdateRequest } from '../models/CabAgencyMobileNumberUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class CabAgencyService {

  constructor(private http:HttpClient) { }

  signupCabAgency(cabAgency:CabAgency)
  {
    return this.http.post(`http://localhost:8080/cabagency`,cabAgency);
  }

  loginCabAgencyService(cabAgencyLoginRequest:CabAgency)
  {
    return this.http.post(`http://localhost:8080/cabagency/login`,cabAgencyLoginRequest)
    
    
  }

  displayCabAgencyService(cabAgencyId:number)
  {
    return this.http.get(`http://localhost:8080/cabagency/${cabAgencyId}`);
  }

  addCabsToCabAgencyService(cabAgencyId:number)
  {
    return this.http.patch(`http://localhost:8080/cabagency/cabs/${cabAgencyId}`,null);
  }

  addDriversToCabAgencyService(cabAgencyId:number)
  {
    return this.http.patch(`http://localhost:8080/cabagency/drivers/${cabAgencyId}`,null);
  }


  updateCabLocationInCabAgencyService(cabAgencyId:number,cabId:number,cabPickUpLocation:String,cabDropLocation:String,cabFare:number)
  {
    return this.http.patch(`http://localhost:8080/cabagency/cablocation/${cabAgencyId}/${cabId}/${cabPickUpLocation}/${cabDropLocation}/${cabFare}`,null);
  }

  

  updateCabAgencyMobileNumberService(cabAgencyId:number,cabAgencyNewMobileNumber:CabAgencyMobileNumberUpdateRequest)
  {
    return this.http.patch(`http://localhost:8080/cabagency/mobile/${cabAgencyId}`,cabAgencyNewMobileNumber);
    
  }

  changeCabAgencyPasswordService(cabAgencyId:number,newPassword:cabAgencyPassworUpdateRequest)
  {
    return this.http.patch(`http://localhost:8080/cabagency/password/${cabAgencyId}`,newPassword);
  }


  getAllCabsofCabAgencyService(cabAgencyId:number)
  {
    return this.http.get<Cab[]>(`http://localhost:8080/cabagency/cabs/${cabAgencyId}`);
  }



  getOnlyCabsBookedService(cabAgencyId:number)
  {
    return this.http.get<Cab[]>(`http://localhost:8080/cabagency/booked-cabs/${cabAgencyId}`);
  }


  getOnlyCabsUnBookedService(cabAgencyId:number)
  {
    return this.http.get<Cab[]>(`http://localhost:8080/cabagency/unbooked-cabs/${cabAgencyId}`);
  }

  

  getAllCurrentBookings(cabAgencyId:number)
  {
    return this.http.get<Booking[]>(`http://localhost:8080/booking/current-bookings/${cabAgencyId}`);

  }

  getAllBookings(cabAgencyId:number)
  {
    return this.http.get<Booking[]>(`http://localhost:8080/booking/all-bookings/${cabAgencyId}`);
    
  }

  isCabAgencyLoggedIn()
  {
    let cabAgency=sessionStorage.getItem('loggedInCabAgency')
    return !(cabAgency==null)
  }


 

  
}
