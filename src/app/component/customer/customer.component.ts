import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { Booking } from '../../models/Booking';
import { Payment } from '../../models/Payment';
import { CommonModule, DatePipe } from '@angular/common';
import { BookingService } from '../../service/booking.service';
import { tick } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,DatePipe],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerId:number=0


  currentBookingId:number=0
  currentBooking:Booking=new Booking()
  currentBookingPayment:Payment=new Payment()
  customerCurrentBooking:Boolean=false;

  customerCurrentBookingDate:String|null=null



  constructor(private route:ActivatedRoute,
    private router: Router,
    private customerService:CustomerService,
    private bookingService:BookingService
    ){
     
    this.customerId=this.route.snapshot.params['id'];
    console.log(this.customerId);
    this.displayCurrentBooking()
  }


  bookCabButton()
  {
    console.log("button clicked");
    this.router.navigateByUrl(`/booking/${this.customerId}`)

  }



  displayCurrentBooking()
  {
    this.customerService.displayCurrentBookingService(this.customerId).subscribe(
      data=>{
        console.log(data);

        this.currentBooking=data;

        if(this.currentBooking.payment!=undefined)
        this.currentBookingPayment=this.currentBooking.payment;
      this.customerCurrentBooking=true;

        if(this.currentBooking.bookingId!=undefined)
        this.currentBookingId=this.currentBooking.bookingId
        
        if(this.currentBooking.bookingDate && typeof this.currentBooking.bookingDate!= 'boolean')
        {
          this.customerCurrentBookingDate=new Date(this.currentBooking.bookingDate).toLocaleDateString();
        }



        

      }
    )
  }

  bookingOver()
  {
    this.bookingService.bookingOverService(this.customerId,this.currentBookingId).subscribe(
      data=>{
        console.log(data);
        this.customerCurrentBooking=false;

        
      }
    )
  }


  customerLogout()
  {
    sessionStorage.removeItem('loggedInCustomer');
    this.router.navigateByUrl('/home')
  }

}
