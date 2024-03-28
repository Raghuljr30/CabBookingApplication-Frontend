import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CabAgencyService } from './cab-agency.service';

@Injectable({
  providedIn: 'root'
})
export class CabAgencyRouteGaurdService implements CanActivate{

  constructor(private cabAgencyService:CabAgencyService) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean | Observable<boolean> | Promise<boolean>
  {
    if( this.cabAgencyService.isCabAgencyLoggedIn())
    {
      return true;
    }
    else
  
    return false;
   
  }
}
