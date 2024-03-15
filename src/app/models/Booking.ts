import { Payment } from "./Payment";
export class Booking{
    
    constructor(
    public bookingId?:number,
    public customerName?:String,
    public cabNumber?:number,
    public pickUpLocation?:String,
    public dropLocation ?:number,
    public bookingDate?:boolean,
    public payment?:Payment,
    )
    {

    }
}