import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver } from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  signupDriver(driver:Driver)
  {
    return this.http.post(`http://localhost:8080/driver`,driver);
  }
}
