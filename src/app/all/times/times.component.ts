import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {
  collection: any[] = []
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.collection = this.service.getTimes();
  }
  getWatch1() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });

  }

}
