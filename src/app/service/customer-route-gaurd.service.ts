import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CabAgencyService } from './cab-agency.service';
import { CustomerService } from './customer.service';
@Injectable({
  providedIn: 'root'
})
export class CustomerRouteGaurdService {

  constructor(private customerService: CustomerService) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean | Observable<boolean> | Promise<boolean>
  {
    if( this.customerService.isCustomerLoggedIn())
    {
      return true;
    }
    else
  
    return false;
   
  }

}
