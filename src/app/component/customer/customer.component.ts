import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { Booking } from '../../models/Booking';
import { Payment } from '../../models/Payment';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../service/booking.service';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerId:number=0

  currentBookingId:number=0
  currentBooking:Booking=new Booking()
  currentBookingPayment:Payment=new Payment()
  customerCurrentBooking:Boolean=false;

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

}
