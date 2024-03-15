import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  signUpCustomer(customer:Customer)
  {
   return this.http.post(`http://localhost:8080/customer`,customer) 
  }


  loginCustomer(id:number,email:String,password:String)
  {
    return this.http.post(`http://localhost:8080/customer/login/${id}/${email}/${password}`,null); 
  }

  displayCurrentBookingService(customerId:number)
  {
    return this.http.get(`http://localhost:8080/customer/currentBooking/${customerId}`)
  }
}
