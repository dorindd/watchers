import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-myfooter',
  templateUrl: './myfooter.component.html',
  styleUrls: ['./myfooter.component.scss']
})
export class MyfooterComponent implements OnInit {
  value: any = ''
  constructor() { }
  ngOnInit(): void {
  }
  toNav() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }
  sendData(f: any) {
    console.log(f.value)
    this.value = ''
  }
  toHome() {
    document.getElementById("nav")?.scrollIntoView({ behavior: "smooth" });
  }
}
