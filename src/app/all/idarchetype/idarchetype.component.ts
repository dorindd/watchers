import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-idarchetype',
  templateUrl: './idarchetype.component.html',
  styleUrls: ['./idarchetype.component.scss']
})
export class IdarchetypeComponent implements OnInit {
  tops=true
 watch:any;
show1=true
 show2=false
 show3=false;
  panelOpenState = false;
  constructor(private share:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {


 const id=+this.route.snapshot.params['id'];
    this.watch=this.share.getProduct1(id);



  }


  getShow1(){
    this.show2=true;
    this.show1=false

  }


  getOut1(){
    this.show2=false
    this.show1=true;

  }


  getShow2(){
    this.show3=true;
    this.show1=false

  }


  getOut2(){
    this.show3=false;
     this.show1=true;

  }

  addColection(item:any){
    this.share.addToCollection(item)

  }

  //
  addFavorite(item:any){
    this.share.addToCollection1(item)

  }

}
