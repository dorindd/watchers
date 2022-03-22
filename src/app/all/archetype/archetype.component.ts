import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-archetype',
  templateUrl: './archetype.component.html',
  styleUrls: ['./archetype.component.scss']
})
export class ArchetypeComponent implements OnInit {

collection:any[]=[]
  constructor(private service:DataService,) { }

  ngOnInit(): void {
    this.collection = this.service.getArchetype();
  }
  getWatch1() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });

  }

}
