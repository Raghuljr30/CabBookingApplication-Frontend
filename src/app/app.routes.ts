import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DriverComponent } from './component/driver/driver.component';
import { CabAgencyComponent } from './component/cab-agency/cab-agency.component';
import { CabComponent } from './component/cab/cab.component';
import { SignupComponent } from './component/signup/signup.component';
import { CustomerComponent } from './component/customer/customer.component';
import { LoginComponent } from './component/login/login.component';
import { BookingComponent } from './component/booking/booking.component';
import { CabAgencyRouteGaurdService } from './service/cab-agency-route-gaurd.service';
import { CustomerRouteGaurdService } from './service/customer-route-gaurd.service';

export const routes: Routes = [

   {path:'',component:CabAgencyComponent},
   {path:'cabAgency/loggedIn/:isLoggedIn/:id',component:CabAgencyComponent,canActivate: [CabAgencyRouteGaurdService]},
   {path:'cabAgency/loggedIn/:isLoggedIn/:id/viewProfile',component:CabAgencyComponent,canActivate:[CabAgencyRouteGaurdService]},
   {path:'home',component:HomeComponent},
   {path:'driver',component:DriverComponent},
   {path:'cabAgency/:isLogin',component:CabAgencyComponent},
  
   {path:'signup/:role',component:SignupComponent},
   {path:'login/:role',component:LoginComponent},
   {path:'customer/:id',component:CustomerComponent,canActivate:[CustomerRouteGaurdService]},
   {path:'booking/:id',component:BookingComponent,canActivate:[CustomerRouteGaurdService]},
   {path:'cab',component:CabComponent}

  


];
