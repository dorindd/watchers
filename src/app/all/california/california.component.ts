import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-california',
  templateUrl: './california.component.html',
  styleUrls: ['./california.component.scss']
})
export class CaliforniaComponent implements OnInit {

  collection: any[] = []
  constructor(private service: DataService,) { }

  ngOnInit(): void {
    this.collection = this.service.getCalifornia();
  }

}
