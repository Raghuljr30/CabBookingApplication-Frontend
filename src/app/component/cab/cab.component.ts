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

  constructor(private cabService:CabService)
  {

  }

  signupCab()
  {
    this.cab=new Cab(this.cab.cabId,this.cab.cabModel,this.cab.ac,this.cab.numberOfSeats,this.cab.vehicleNumber,this.cab.availability,
      this.cab.agencyName,this.cab.cabAgencyId,this.cab.pickUpPoint,this.cab.dropPoint,this.cab.fair);
    console.log(this.cab)
    this.cabService.cabSignUp(this.cab).subscribe(
      data=>{
        console.log(data)
      }
    )
    


  }

}
