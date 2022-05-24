import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mywatchtype',
  templateUrl: './mywatchtype.component.html',
  styleUrls: ['./mywatchtype.component.scss']
})
export class MywatchtypeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  getWatch1() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }
  getWatch2() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }
  getWatch3() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }
  getWatch4() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }
}
