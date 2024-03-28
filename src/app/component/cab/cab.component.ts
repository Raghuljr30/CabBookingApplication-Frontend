import { Component } from '@angular/core';
import { Cab } from '../../models/Cab';
import { FormsModule } from '@angular/forms';
import { CabService } from '../../service/cab.service';

@Component({
  selector: 'app-cab',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './cab.component.html',
  styleUrl: './cab.component.css'
})


export class CabComponent {

  cab:Cab=new Cab()
   cabModel:String=""
   ac?:String=""
   numberOfSeats?:number=0
   vehicleNumber?:number=0
   availability?:boolean=false
   agencyName?:String=""
   cabAgencyId?: number
   pickUpPoint?:String=""
   dropPoint?:String=""
   fair?:number
   driverAgencyId?:number

  constructor(private cabService:CabService)
  {

  }

  registerCab()
  {
    this.cab=new Cab(this.cab.cabId,this.cab.cabModel,this.cab.ac,this.cab.numberOfSeats,this.cab.vehicleNumber,this.cab.availability,
      this.cab.agencyName,this.cab.cabAgencyId,this.cab.pickUpPoint,this.cab.dropPoint,this.cab.fair,this.cab.driverAgencyId);
    console.log(this.cab)
    this.cabService.cabSignUp(this.cab).subscribe(
      data=>{
        console.log(data)
      }
    )
    


  }

}
