
export class Customer{
    
    constructor(
    public id?:number,
    public name?:String,
    public email?:String,
    public password?:String,
    public mobileNumber ?:number,
    public currentBookingExist:boolean=false
    )
    {

    }
}