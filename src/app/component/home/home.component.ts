import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isDriver:boolean=false;
  isLogin:boolean=false;

  constructor(private router: Router)
  {
    
  }

  signup(role:String)
  {
    if(role==='driver')
    {
      this.isDriver=true;
      this.router.navigateByUrl(`/signup/${role}`)
    }
    else if(role==='cabAgency')
    { 
      console.log(this.isLogin)
      this.router.navigateByUrl(`/signup/${role}`)
    }
    else
    {
      this.router.navigateByUrl(`/signup/${role}`)
    }
    
  }

  login(role:String)
  {
    if(role==='cabAgency')
    {
      this.isLogin=true;
      console.log(this.isLogin)
      this.router.navigateByUrl(`/login/${role}`)
    }
    else if(role=='customer')
    {
      this.router.navigateByUrl(`/login/${role}`)
    }
    else if(role==='driver')
    {
      this.router.navigateByUrl(`/login/${role}`)
    }
  }
  todriver()
  {
    this.router.navigate(['/driver'])
  }

}
