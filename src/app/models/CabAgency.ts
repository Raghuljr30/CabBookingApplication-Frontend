import { Driver } from "./Driver";

export class CabAgency{


    constructor(
        public cabAgencyId?:number,
        public cabAgencyName?:String,
        public cabAgencyEmail?:String,
        public cabAgencyPassword?:String,
        public cabAgencyMobileNumber?:number,
        public driver?:Driver
       
    )
    {

    }
}