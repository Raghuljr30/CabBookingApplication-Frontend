import { Component } from '@angular/core';
import { Cab } from '../../models/Cab';
import { BookingService } from '../../service/booking.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tick } from '@angular/core/testing';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  fromLocation:String=''
  toLocation:String=''
  cabs:Cab[]=[]
  cabsByLocation:Cab[]=[]
  cabBookingPayment:Boolean=false;

  currentCabBookingExist:Boolean=true

 

  cabBookedCabAgencyName:String=''
  cabBookedCabAgencyId:number=0
  cabBookedId:number=0
  cabBookedCabModel:String=""
  cabBookedDropPoint:String=""
  cabBookedfair:number=0
  cabBookednumberOfSeats:number=0
  cabBookedPickUpPoint:String=""
  cabBookedvehicleNumber:number=0
  cabBookedAc:boolean=false;
  paymentType:String=''

  cabAc:boolean=false

  customerId:number=0;
  constructor(private bookingService:BookingService,
    private route:ActivatedRoute,
    private router:Router)
  {
    this.customerId=this.route.snapshot.params['id']
    this.bookingService.displayAllAvailableCabs().subscribe(
      data=>{
        console.log(typeof(data))
        console.log(data)
        
        this.cabs=data;
        
      }
    )
    
  }

  searchByLoaction()
  {
    console.log(this.fromLocation+" "+this.toLocation);
    this.bookingService.searchByLocationService(this.fromLocation,this.toLocation).subscribe(
      data=>{
        console.log(data);
        this.cabsByLocation=data
      }
    )
  }

  bookCabButtonClicked(cabBooked:Cab)
  {

    console.log("book button clicked");
    console.log(cabBooked);
    this.cabBookingPayment=true;
    if(cabBooked!=undefined)
    {
      if(cabBooked.agencyName!=undefined)
      {
        this.cabBookedCabAgencyName=cabBooked.agencyName
      }
      if(cabBooked.cabAgencyId!=undefined)
      this.cabBookedCabAgencyId=cabBooked.cabAgencyId

      if(cabBooked.cabId!=undefined)
       this.cabBookedId=cabBooked.cabId
      // this.cabBookedCabModel:String=""
      if(cabBooked.dropPoint!=undefined)
       this.cabBookedDropPoint=cabBooked.dropPoint
      if(cabBooked.fair!=undefined)
      this.cabBookedfair=cabBooked.fair
      // this.cabBookednumberOfSeats:number=0
      if(cabBooked.pickUpPoint!=undefined)
      this.cabBookedPickUpPoint=cabBooked.pickUpPoint
      if(cabBooked.vehicleNumber!=undefined)
       this.cabBookedvehicleNumber=cabBooked.vehicleNumber

       
    }
   
    
  }

  makePayment()
  {
    console.log("payment made")

   
    this.bookingService.bookCabService(this.customerId,this.cabBookedId,this.paymentType).subscribe(
      data=>{
        console.log(data)
        this.currentCabBookingExist=true;
        this.router.navigateByUrl(`customer/${this.customerId}`)
      },
      error=>
      {
        window.alert(error.error)
      }
    )
  }



}
