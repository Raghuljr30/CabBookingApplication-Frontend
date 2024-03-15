import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Driver } from '../../models/Driver';
import { CommonModule } from '@angular/common';
import { DriverService } from '../../service/driver.service';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})



export class DriverComponent {

 
    driver:Driver=new Driver();

    constructor(private driverService: DriverService)
    {

    }

    driverSignup()
    {
      
    this.driver=new Driver(this.driver.driverId, this.driver.driverName, this.driver.driverEmail,this.driver.driverPassword,this.driver.driverMobileNumber,
    this.driver.licenseNumber,this.driver.driverVehicleNumber,this.driver.driverAgencyId,this.driver.driverAgencyName,);
      

      console.log(this.driver)

      this.driverService.signupDriver(this.driver).subscribe(
        data=>
        {
          console.log(data)
        }
      )
    }
   
  
  
  
  

  
}
