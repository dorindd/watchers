import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-luminox',
  templateUrl: './luminox.component.html',
  styleUrls: ['./luminox.component.scss']
})
export class LuminoxComponent implements OnInit {

  collection: any[] = []
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.collection = this.service.getLuminox();
  }
  getWatch1() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });

  }

}
