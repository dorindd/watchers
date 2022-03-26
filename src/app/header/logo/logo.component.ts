import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { SharedataService } from 'src/app/sharedata.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  number: any = 0;//

  show: boolean = true;
  show1: boolean = false;
  show2: boolean = false;
  myshow: boolean = false;
  welcome:any

  data: any = true
  user: any=true;
  myFavorite:any=0


  constructor(public share: SharedataService, private route: Router, private service: DataService, private fireauth: AngularFireAuth) {


    this.fireauth.authState.subscribe(

      (auth) => {
        if (auth != null)

          this.user = auth;
 }
    )



  }

  allreset: any =0


  ngOnInit(): void {

    this.service.itemFavorite.subscribe((data:any)=>{
      this.myFavorite = data.length


    })



    this.welcome=this.share.getDataWelcome();



    this.service.itemNumber.subscribe(data => {
      this.allreset = data
      this.allreset = this.number// reset number

    })

    this.service.itemNumber.subscribe((data: any) => {
      this.number = data.length;

      if (this.number != 0) {
        this.show = false;
        this.myshow = true;


      } else {
        this.show = true
        this.myshow = false;
      }
      this.getProduct()
      this.getProduct1()

    })

  }


  getProduct() {



    if (this.number <= 1) {
      this.show1 = true
    }
    else {
      this.show1 = false;
    }



  }
  getProduct1() {
    if (this.number >= 2) {
      this.show2 = true
    }
    else {
      this.show2 = false;
    }
  }



  getBascket(pageName1: string, pageName: string) {
    if (this.number > 0) { this.route.navigate([`${pageName1}`]) }
    else { this.route.navigate([`${pageName}`]) }

  }

  getHome() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }

  getFavorite(pageName1:string , pageName:string){
    if(this.myFavorite>0){this.route.navigate([`${pageName1}`])}
    else { this.route.navigate([`${pageName}`])}

  }
}
