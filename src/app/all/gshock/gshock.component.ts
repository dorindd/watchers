import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-gshock',
  templateUrl: './gshock.component.html',
  styleUrls: ['./gshock.component.scss']
})
export class GshockComponent implements OnInit {
  collection: any[] = []
  constructor(private service: DataService,) { }

  ngOnInit(): void {
    this.collection = this.service.getGshock();
  }

  getWatch1() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });

  }


}
