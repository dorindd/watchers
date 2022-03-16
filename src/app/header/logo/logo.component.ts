import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { SharedataService } from 'src/app/sharedata.service';





@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  number:any=0;//
  welcomeshow:any=false;
  show:boolean=true;
  show1:boolean=false;
  show2:boolean=false;
  myshow:boolean=false;





data:any=true

logIn:any;
showLogOut:any=true;


  constructor(public share:SharedataService,private route:Router,private service:DataService) {





   }

   allreset:any=0

  ngOnInit(): void {

    this.share.welcome.subscribe(data => {
      this.welcomeshow=data

    })
    this.service.itemNumber.subscribe(data => {
      this.allreset=data
      this.allreset = this.number// reset number

    })

    this.service.itemNumber.subscribe((data:any) => {
      this.number=data.length;

      if(this.number!=0){
        this.show=false;
    this.myshow=true;


      }else{
        this.show=true
         this.myshow=false;
      }
this.getProduct()
this.getProduct1()

    })



      if(this.data==false){
        this.logIn=true
      }



  this.logIn=this.share.getShowIn()




this.showLogOut=this.share.getShowOut()


  }

logOut(){
  this.share.logOut()
 this.welcomeshow= false;
   this.data=false;
   this.logIn=true;

   this.showLogOut=false;
   this.logIn=true;






}


getLogIn(){



this.logIn=false

  this.route.navigate(["/auth/user"]);




}

getProduct(){
  if(this.number<=1){
    this.show1=true
  }
  else{
    this.show1=false;
  }
}
getProduct1(){
  if(this.number>=2){
    this.show2=true
  }
  else{
    this.show2=false;
  }
}



  getBascket(pageName1: string, pageName: string) {
    if (this.number>0) { this.route.navigate([`${pageName1}`]) }
    else { this.route.navigate([`${pageName}`]) }

  }

  getHome(){
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }
}
