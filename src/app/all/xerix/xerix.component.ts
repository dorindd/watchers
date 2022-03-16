import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-xerix',
  templateUrl: './xerix.component.html',
  styleUrls: ['./xerix.component.scss']
})
export class XerixComponent implements OnInit {
collection:any[]=[]
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.collection=this.service.getXerix();
  }

}
