import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CabAgencyService } from '../../service/cab-agency.service';
import { CabAgency } from '../../models/CabAgency';
import { cabAgencyLoginRequest } from '../../models/CabAgencyLoginRequest';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  role:String=''
  customerId:number=0
  customerEmail:String=''
  customerPassword:String=''


  cabAgencyLoginRequest:cabAgencyLoginRequest=new cabAgencyLoginRequest();
  
  cabAgencyId:number=0
  cabAgencyEmail:String=""
  cabAgencyPassword:String=""
  cabAgencyDetail:CabAgency=new CabAgency()

  isLoggedIn:boolean=false;
  invalidCredentials:boolean=false;

  constructor(private customerService:CustomerService,
    private cabAgencyService:CabAgencyService,
    private route:ActivatedRoute,
    private router:Router)
  {
    this.role=this.route.snapshot.params['role']
     console.log(this.role)
  }


  customerLogin()
  {
    console.log("customer login button clicked");
    

    this.customerService.loginCustomer(this.customerId,this.customerEmail,this.customerPassword).subscribe(
      data=>{
        console.log(data);
        if(data==true)
        {
          console.log( sessionStorage.setItem('loggedInCustomer',this.customerEmail.toString()) )
        sessionStorage.setItem('loggedInCustomer',this.customerEmail.toString())

        this.router.navigateByUrl(`/customer/${this.customerId}`)
        }
       
      }
    )
    
  }


  cabAgencyLogin()
  {
    console.log("login clicked")
    
    this.cabAgencyLoginRequest=new cabAgencyLoginRequest(this.cabAgencyId,this.cabAgencyEmail,this.cabAgencyPassword);
    this.cabAgencyService.loginCabAgencyService(this.cabAgencyLoginRequest).subscribe(
      data=>{
        
        if(data==true)
        {
          console.log(data);
          sessionStorage.setItem('loggedInCabAgency',this.cabAgencyEmail.toString())
          
           this.isLoggedIn=true;
           console.log(this.isLoggedIn)
          // this.isLogin=false;
          this.router.navigateByUrl(`/cabAgency/loggedIn/${this.isLoggedIn}/${this.cabAgencyId}`)
        }
        else 
        {
          this.invalidCredentials=true;
        }
      },
      error=>{
        console.log(error);
        this.invalidCredentials=true;
      }

      
      
     
    )
  }

 


 

}
