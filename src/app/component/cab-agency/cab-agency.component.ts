import { Component } from '@angular/core';
import { CabAgency } from '../../models/CabAgency';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators ,FormBuilder} from '@angular/forms';
import { CabAgencyService } from '../../service/cab-agency.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Cab } from '../../models/Cab';
import { Driver } from '../../models/Driver';
import { Booking } from '../../models/Booking';
import { cabAgencyPassworUpdateRequest } from '../../models/CabAgencyPasswordUpdateRequest';
import { CabAgencyMobileNumberUpdateRequest } from '../../models/CabAgencyMobileNumberUpdateRequest';



@Component({
  selector: 'app-cab-agency',
  standalone: true,
  imports: [CommonModule,FormsModule,CabAgencyComponent,RouterLink,HomeComponent,ReactiveFormsModule,DatePipe],
  templateUrl: './cab-agency.component.html',
  styleUrl: './cab-agency.component.css'
})
export class CabAgencyComponent {

  cabAgency:CabAgency=new CabAgency();
  id:number=0
  cabAgencyId:number=0
  cabAgencyEmail:String=""
  cabAgencyPassword:String=""
  isLogin:boolean=false;
  isLoggedIn:boolean=false;
  cabAgencyDetail:CabAgency=new CabAgency()
  cabs:Cab[]=[]
  updateCabLocationButtonClicked:boolean=false;
  cabId:number=0
  cabPickUpLocation:String=""
  cabDropLocation:String=""
  cabFare:number=0
 
  cabAgencyNewMobileNumber:number=0
  
  isLoggedInParam:String=''

  
  setRole:String=''

  cabDriver:Driver=new Driver();


  showMobileNumberForm:boolean=false;
  reactiveform!:FormGroup


  changeCabAgencyPasswordButtonClicked:boolean=false
  updateCabAgencyMobileNumberButtonClicked:boolean=false;
  changeCabAgencyLocationButtonClicked:boolean=false;

  displayAllCabs:boolean=false;
  cabListOfCabAgency:Cab[]=[]

  displayOnlyUnBookedCabs:boolean=false;
  listOfOnlyUnBookedCabs:Cab[]=[]


  displayOnlyBookedCabs:boolean=false;
  listOfOnlyBookedCabs:Cab[]=[]

  displayOnlyCurrentBookings:boolean=false;
  listOfOnlyCurrentBookings:Booking[]=[]

  displayAllBooking:boolean=false;
  listOfAllBookings:Booking[]=[]

  currentBookingDate:String|null=null

  setViewProfile:boolean=false;
  setEditProfile:boolean=false;

  maskedPassword: string = '';
  passwordUpdateSuccess:boolean=false;
  mobileNumberUpdateSuccess:boolean=false

  cabAgencyUpdatePassword:cabAgencyPassworUpdateRequest=new cabAgencyPassworUpdateRequest()
  
  updateCabAgencyMobileNumberForm:CabAgencyMobileNumberUpdateRequest=new CabAgencyMobileNumberUpdateRequest();

  newPassword:String=""
  constructor(private route:ActivatedRoute,
    private cabAgencyService: CabAgencyService, 
    private homeComponent:HomeComponent,
    private router:Router,
    private formbuilder:FormBuilder)
  {

    this.isLoggedInParam= this.route.snapshot.params['isLoggedIn'];
    this.cabAgencyId=this.route.snapshot.params['id'];
    console.log( typeof(this.isLoggedInParam)+"----type")

    if(this.isLoggedInParam==="true")
    {
      console.log(this.isLoggedInParam+"----")
     this. displayCabAgency(this.cabAgencyId);
    }
 


  
    this.reactiveform=this.formbuilder.group({
      password1:new FormControl('', Validators.required),
      password2:new FormControl('',Validators.required)
    },{
      validators:this.Mustmatch('password1','password2')
    })
    this.isLogin=this.route.snapshot.params['isLogin']
    console.log(this.isLogin);
  }

  get f()
  {
    return this.reactiveform.controls;
  }

  Mustmatch(password1:any, password2:any)
  {
    return(formGroup:FormGroup)=>{
      const password1control=formGroup.controls[password1];
      const password2control=formGroup.controls[password2];

      if(password2control.errors && !password2control.errors['Mustmatch']){
        return;
      }

      if(password1control.value!== password2control.value)
      {
        password2control.setErrors({Mustmatch:true})
      }
      else
      {
        password2control.setErrors(null)
      }
    }
  }
  

  displayCabAgencyFunction()
  {
    this.displayOnlyBookedCabs=false;
    this.displayOnlyUnBookedCabs=false;
    this.displayCabAgency(this.cabAgencyId);
  }

 
  displayCabAgency(cabAgencyId:number)
  {
    console.log(cabAgencyId)
    this.cabAgencyService.displayCabAgencyService(this.cabAgencyId).subscribe(
      data=>{
        console.log(data);
        this.cabAgencyDetail=data
        if(this.cabAgencyDetail.cabAgencyPassword!=undefined)
        this.maskedPassword ='●'.repeat(this.cabAgencyDetail.cabAgencyPassword.length);
      }
    )

    this.cabAgencyService.getAllCabsofCabAgencyService(cabAgencyId).subscribe(
      data=>{
        console.log(data);

        this.displayAllCabs=true;
        this.displayOnlyUnBookedCabs=false;
        this.displayOnlyBookedCabs=false;
        this.displayOnlyCurrentBookings=false;
        this.displayAllBooking=false;
  

        this.cabListOfCabAgency=data
        // this.cabDriver=data.driver;
        
      }
    )
  }

  functionToBePerformed(role:String)
  { 
    if(role==='changeCabLocation')
    {
      this.changeCabAgencyLocationButtonClicked=!this.changeCabAgencyLocationButtonClicked
      this.setRole='changeCabLocation';
    }
    else if(role==='changeMobileNumber')
    {
      this.updateCabAgencyMobileNumberButtonClicked=!this.updateCabAgencyMobileNumberButtonClicked;
      console.log(this.updateCabAgencyMobileNumberButtonClicked)
      this.setRole='changeMobileNumber';
    }
    else if(role==='changePassword')
    {
      this.changeCabAgencyPasswordButtonClicked=!this.changeCabAgencyPasswordButtonClicked;
      this.setRole='changePassword'
    }

  }

 





  addCabs()
  {
    this.cabAgencyService.addCabsToCabAgencyService(this.cabAgencyId).subscribe(
      data=>{
        console.log(data)
        window.location.reload()
      }
    )
  }

  addDrivers()
  {
    this.cabAgencyService.addDriversToCabAgencyService(this.cabAgencyId).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
  updateCabLocation()
  {
    this.updateCabLocationButtonClicked=true;
  }
  updateCabPickUpAndDropPoint()
  {
    console.log("update button clicked"+ this.cabId+ " "+this.cabPickUpLocation+" "+ this.cabDropLocation)
    this.cabAgencyService.updateCabLocationInCabAgencyService(this.cabAgencyId,this.cabId,this.cabPickUpLocation,this.cabDropLocation,this.cabFare).subscribe(
      data=>{
        console.log(data);
        this.isLoggedIn=true;
        window.location.reload();
      },
      error=>
      {
        console.log(error)
      }
    )
  }

  updateMobileNumberNumberClicked()
  {
    this.updateCabAgencyMobileNumberButtonClicked=!this.updateCabAgencyMobileNumberButtonClicked;
 
  }

  updateCabAgencyMobileNumber()
  {
    console.log("mobile number update button clicked");
    this.updateCabAgencyMobileNumberForm=new CabAgencyMobileNumberUpdateRequest(this.cabAgencyNewMobileNumber);
    this.cabAgencyService.updateCabAgencyMobileNumberService(this.cabAgencyId,this.updateCabAgencyMobileNumberForm).subscribe(
      data=>{
        this.mobileNumberUpdateSuccess=true;
        setTimeout(() => {
          location.reload();
      }, 2000);
       
        
        
        console.log(data);
        // window.location.reload();
      }
    )
  }


  changePasswordButtonClicked()
  {
    this.changeCabAgencyPasswordButtonClicked=true;
  }


  changeCabAgencyPassword()
  {
    console.log("password update clicked")
    console.log(this.reactiveform.value.password1);
    this.cabAgencyUpdatePassword=new cabAgencyPassworUpdateRequest(this.reactiveform.value.password1);
    this.cabAgencyService.changeCabAgencyPasswordService(this.cabAgencyId,this.cabAgencyUpdatePassword).subscribe(
      data=>{
        console.log(data)
        this.changeCabAgencyPasswordButtonClicked=false;
        setTimeout(() => {
          location.reload();
      }, 2000);
        if(this.cabAgencyDetail.cabAgencyPassword!=undefined)
        
         this.maskedPassword='●'.repeat(this.cabAgencyDetail.cabAgencyPassword.length);
         this.passwordUpdateSuccess=true;

        
      },
      error=>{
        
      }
    )
  
  }

  closeForm(role:String )
  {
    console.log("close button clicked")
    if(role==='changeMobileNumber')
    { 
      this.updateCabAgencyMobileNumberButtonClicked=false;
      window.location.reload()
    }
  }



  displayBookedCabs()
  {
    console.log("booke cab button clicked");

    this.cabAgencyService.getOnlyCabsBookedService(this.cabAgencyId).subscribe(
      data=>{
        this.displayAllCabs=false;
        this.displayOnlyBookedCabs=true;
        this.displayOnlyUnBookedCabs=false;
        this.displayAllBooking=false;
        this.displayOnlyCurrentBookings=false;
        this.listOfOnlyBookedCabs=data;
        console.log(data);
      }
    )
  }

  displayUnBookedCabs()
  {
    console.log("booked cab button clicked");
    this.cabAgencyService.getOnlyCabsUnBookedService(this.cabAgencyId).subscribe(
      data=>{
        this.displayAllCabs=false;
        this.displayOnlyBookedCabs=false;
        this.displayOnlyUnBookedCabs=true;
        this.displayAllBooking=false;
        this.displayOnlyCurrentBookings=false;
        this.listOfOnlyUnBookedCabs=data;
        console.log(data);
      }
    )
  }


  displayAllCurrentBooking()
  {
    console.log("current bookings button clicked");
    this.cabAgencyService.getAllCurrentBookings(this.cabAgencyId).subscribe(
      data=>{
        this.displayOnlyCurrentBookings=true;
        this.displayAllCabs=false;
        this.displayOnlyBookedCabs=false;
        this.displayOnlyUnBookedCabs=false;
        this.displayAllBooking=false
        this.listOfOnlyCurrentBookings=data;
        
      
        console.log(data);
      }
    )
  }


  displayAllBookings()
  {
    console.log("all bookings button clicked");
    this.cabAgencyService.getAllBookings(this.cabAgencyId).subscribe(
      data=>{
        this.displayAllBooking=true;
        this.displayOnlyCurrentBookings=false;
        this.displayAllCabs=false;
        this.displayOnlyBookedCabs=false;
        this.displayOnlyUnBookedCabs=false;

        this.listOfAllBookings=data
        console.log(data);
      }
    )
  }





  cabAgencyLogout()
  {
    console.log('logot button clicked')
    sessionStorage.removeItem('loggedInCabAgency');
    this.router.navigateByUrl('/home')
  }

  registerCab()
  {
    console.log("register cabs")
    this.router.navigateByUrl('/cab')
  }


  viewProfile()
  {
    this.setViewProfile=true;
    // this.router.navigateByUrl(`cabAgency/loggedIn/${this.isLoggedIn}/${this.cabAgencyId}/viewProfile`)
  }
  editProfile()
  {
    this.setEditProfile=true;
  }

  closeProfile()
  {
    this.setViewProfile=false;

  }

  closeEditProfile()
  {
    this.setEditProfile=false;
  }


 

  // toggleMobileNumberForm() {
  //   this.showMobileNumberForm = !this.showMobileNumberForm; // Toggle form visibility
    
  // }
  
}
