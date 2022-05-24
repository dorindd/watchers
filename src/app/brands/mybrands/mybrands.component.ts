import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mybrands',
  templateUrl: './mybrands.component.html',
  styleUrls: ['./mybrands.component.scss']
})
export class MybrandsComponent implements OnInit {
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
}
