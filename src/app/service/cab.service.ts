import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cab } from '../models/Cab';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private http:HttpClient) { }

  cabSignUp(cab:Cab)
  {
    return this.http.post(`http://localhost:8080/cab`,cab)
  }

}
