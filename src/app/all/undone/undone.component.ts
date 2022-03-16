import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent implements OnInit {

  collection: any[] = []
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.collection = this.service.getUndone();
  }

}
