import { publishFacade } from "@angular/compiler";
import { Cab } from "./Cab";
import { Payment } from "./Payment";
import { Driver } from "./Driver";
export class Booking{
    
    constructor(
    public bookingId?:number,
    public customerName?:String,
    public cabNumber?:number,
    public pickUpLocation?:String,
    public dropLocation ?:number,
    public bookingDate?:boolean,
    public payment?:Payment,
    public cab?:Cab,
    public driver?:Driver
    )
    {

    }
}