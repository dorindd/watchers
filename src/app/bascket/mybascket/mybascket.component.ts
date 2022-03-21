import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mybascket',
  templateUrl: './mybascket.component.html',
  styleUrls: ['./mybascket.component.scss']
})
export class MybascketComponent implements OnInit {
collection:any[]=[]
paymentTotal:any
total:any;



showbasket:boolean=false;
counter:any=0
  constructor(private service:DataService,private router:Router,public location:Location) { }

  ngOnInit(): void {


    this.service.getDataFromLocalSTorage()


















    this.service.allPayment.subscribe(data =>{
this.total=data;


  if(this.total>=1){
    this.showbasket=true
  }
  else{
    this.showbasket=false
  }




    })

    this.collection=this.service.getCollection()
    this.totalPrice();



  }
remove(item:any){
  this.service.removeFromCollection(item);

  this.totalPrice();
  if (this.total == 0) {
    this.router
      .navigateByUrl('/empty/bagempty', { skipLocationChange: false })
      .then(() => {
        this.router.navigate([decodeURI(this.location.path())]);
      })
  }











}

increace(item:any){
  if(item.quantity<10){
item.quantity ++
 this.totalPrice()
  }
  else{
    Swal.fire({
      backdrop: false,
      position: 'center',
      width: 400,
      icon: 'info',
      title: 'Out of stock',




    });
  }


}

decreace(item:any){
  if(item.quantity!=0){
 item.quantity --
 this.totalPrice()
  }


}

totalPrice(){
  this.service.getTotalPrice()







}



}



