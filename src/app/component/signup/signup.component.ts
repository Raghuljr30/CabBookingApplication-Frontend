import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../service/customer.service';
import { FormsModule } from '@angular/forms';
import { CabAgency } from '../../models/CabAgency';
import { CabAgencyService } from '../../service/cab-agency.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  role:String=""
  cabAgency:CabAgency=new CabAgency();
  id:number=0
  cabAgencyId:number=0
  cabAgencyEmail:String=""
  cabAgencySignUpErrorList:any

  registeredCabAgency:CabAgency=new CabAgency();
  

  customer: Customer=new Customer();

  cabAgencySignUpError:any
  isErrorThrown:Boolean=false;

  setSignupCabAgencySuccessful:boolean=false

  isErrorArray: boolean = false;
   

// Check if cabAgencySignUpError is an array

  
  constructor(private route:ActivatedRoute,
    private customerService:CustomerService,
    private router:Router,
    private cabAgencyService:CabAgencyService)
  {
      this.role=this.route.snapshot.params['role']
      console.log(this.role)
  }

  
 



  registerCustomer(role:String)
  {
    console.log(role)
    this.customer=new Customer(this.customer.id,this.customer.name,this.customer.email,this.customer.password,this.customer.mobileNumber)

    console.log(this.customer);
    this.customerService.signUpCustomer(this.customer).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl(`login/${role}`)
      }
    )
  }



  cabAgencySignup()
  {
    this.cabAgency=new CabAgency(this.id,this.cabAgency.cabAgencyName,this.cabAgency.cabAgencyEmail,this.cabAgency.cabAgencyPassword,this.cabAgency.cabAgencyMobileNumber);
    console.log(this.cabAgency)

    this.cabAgencyService.signupCabAgency(this.cabAgency).subscribe(
      data=>{
        console.log(data)
        this.registeredCabAgency=data;
        
        
        this.setSignupCabAgencySuccessful=true;
        // this.router.navigateByUrl(`login/${"cabAgency"}`)
      },
      error=>{
        console.log(error);
        this.cabAgencySignUpError=error.error;
     
        this.cabAgencySignUpErrorList=[this.cabAgencySignUpError];
        console.log(this.cabAgencySignUpError)
        // window.alert(this.cabAgencySignUpError.cabAgencyName)
        this.isErrorThrown=true;
      }
    )
  }


  getSignupErrorMessage()
  {
    if(this.cabAgencySignUpError)
    {
      console.log(Array.isArray(this.cabAgencySignUpError));
      console.log(Object.entries(this.cabAgencySignUpError).map(([key,value])=>({key,value})))
      
      return Object.entries(this.cabAgencySignUpError).map(([key,value])=>({key,value}))
    }
    return []
  }




}
