import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-allnew',
  templateUrl: './allnew.component.html',
  styleUrls: ['./allnew.component.scss']
})
export class AllnewComponent implements OnInit {
  collection: any[] = []
  constructor(private service: DataService) { }
  ngOnInit(): void {
    this.collection = this.service.getNew();
  }
  getWatch1() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }
}
