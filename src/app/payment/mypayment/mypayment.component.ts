import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-mypayment',
  templateUrl: './mypayment.component.html',
  styleUrls: ['./mypayment.component.scss']
})
export class MypaymentComponent implements OnInit {
  amount: any;

  formular:FormGroup;
  formular1:FormGroup;




  constructor(private service: DataService,private router:Router) {
this.formular=new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  address: new FormControl('', [Validators.required]),
  city: new FormControl('', [Validators.required]),
  code: new FormControl('', [Validators.required]),



})
this.formular1=new FormGroup({
  name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
  number: new FormControl('', [Validators.required, Validators.pattern('^\\d*$'), Validators.maxLength(20), Validators.minLength(16)]),
  code: new FormControl('', [Validators.required, Validators.pattern('^\\d*$'), Validators.maxLength(3), Validators.minLength(3)]),
  date: new FormControl('', [Validators.required, Validators.maxLength(5), Validators.minLength(4)]),



})


   }

  ngOnInit(): void {


    this.service.allPayment.subscribe((data: any) => {
      this.amount = data;





      if (this.amount >= 1) {
        this.show = true
      }
      else {
        this.show = false
      }


    })
  }


  show = true;
  show1 = false;
  show2 = false;

  transport: any
  standard:any

  addTransport() {
    if (this.transport != 0) {

      this.transport = 10

      this.show = false;
      this.show2 = false;//
      this.show1 = true;
    }


  }
  removeTransport() {
    this.show = true;
    this.show1 = false;
    this.show2 = false;
  }

  addStandard(){
    if (this.standard != 0) {

      this.standard = 3

      this.show = false;
      this.show1 = false;//
      this.show2 = true;
    }


  }
  showPay:boolean=false//





  onSubmit(data:any){
    console.log(data)

  }
  resetnr:any
  payNow(pageName1: string, pageName: string) {

    this.service.collection=[];
     this.service.itemNumber.next(this.resetnr)//reset number


    if (this.formular.valid  && this.formular1.valid === true) { this.router.navigate([`${pageName1}`]) }
    else { this.router.navigate([`${pageName}`]) }

  }

  onSubmit1(){

console.log(this.formular1.value)

  }

}
