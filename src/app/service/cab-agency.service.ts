import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CabAgency } from '../models/CabAgency';
import { Cab } from '../models/Cab';

@Injectable({
  providedIn: 'root'
})
export class CabAgencyService {

  constructor(private http:HttpClient) { }

  signupCabAgency(cabAgency:CabAgency)
  {
    return this.http.post(`http://localhost:8080/cabagency`,cabAgency);
  }

  loginCabAgencyService(cabAgencyId:number,cabAgencyEmail:String,cabAgencyPassword:String)
  {
    return this.http.post(`http://localhost:8080/cabagency/login/${cabAgencyId}/${cabAgencyEmail}/${cabAgencyPassword}`,null);
  }

  displayCabAgencyService(cabAgencyId:number)
  {
    return this.http.get(`http://localhost:8080/cabAgencies/${cabAgencyId}`);
  }

  addCabsToCabAgencyService(cabAgencyId:number)
  {
    return this.http.patch(`http://localhost:8080/cabagency-cabs-byId/${cabAgencyId}`,null);
  }

  addDriversToCabAgencyService(cabAgencyId:number)
  {
    return this.http.patch(`http://localhost:8080/cabagency-drivers-byId/${cabAgencyId}`,null);
  }


  updateCabLocationInCabAgencyService(cabAgencyId:number,cabId:number,cabPickUpLocation:String,cabDropLocation:String)
  {
    return this.http.patch(`http://localhost:8080/cabagency-update-CabLocationById/${cabAgencyId}/${cabId}/${cabPickUpLocation}/${cabDropLocation}`,null);
  }

  updateCabAgencyMobileNumberService(cabAgencyId:number,cabAgencyNewMobileNumber:number)
  {
    return this.http.patch(`http://localhost:8080/update/customerMobile/${cabAgencyId}/${cabAgencyNewMobileNumber}`,null);
    
  }

  changeCabAgencyPasswordService(cabAgencyId:number,newPassword:String)
  {
    return this.http.patch(`http://localhost:8080/update/cabAgencyPassword/${cabAgencyId}/${newPassword}`,null);
  }


  getAllCabsofCabAgencyService(cabAgencyId:number)
  {
    return this.http.get<Cab[]>(`http://localhost:8080/filter/cabs_by_cabAgency/${cabAgencyId}`);
  }

  
}
