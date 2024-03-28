import { Driver } from "./Driver";

export class Cab{

    
    constructor(public cabId?:number,
        public cabModel?:String,
        public ac?:boolean,
        public numberOfSeats?:number,
        public vehicleNumber?:number,
        public availability?:boolean,
        public agencyName?:String,
        public cabAgencyId?: number,
        public pickUpPoint?:String,
        public dropPoint?:String,
        public fair?:number,
       
        public driverAgencyId?:number,
        public driver?:Driver,
        )
    {

    }
    
        
}