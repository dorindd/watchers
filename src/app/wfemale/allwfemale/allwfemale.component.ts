import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-allwfemale',
  templateUrl: './allwfemale.component.html',
  styleUrls: ['./allwfemale.component.scss']
})
export class AllwfemaleComponent implements OnInit {
  collection: any[] = []
  constructor(private service: DataService) { }
  ngOnInit(): void {
    this.collection = this.service.getWomens();
  }
  getWatch1() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }
}
