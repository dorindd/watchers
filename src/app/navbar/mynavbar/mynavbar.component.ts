import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.scss']
})
export class MynavbarComponent implements OnInit {
  isCollapsed: boolean = true;
  constructor(private route: Router) { }
  ngOnInit(): void {
  }
  getWatch1() {
    this.route.navigate(["all/xerix"])
  }
  getWatch2() {
    this.route.navigate(["all/archetype"])
  }
  getWatch3() {
    this.route.navigate(["all/times"])
  }
  getWatch4() {
    this.route.navigate(["all/gshock"])
  }
  getWatch5() {
    this.route.navigate(["all/california"])
  }
  getWatch6() {
    this.route.navigate(["all/undone"])
  }
  getWatch7() {
    this.route.navigate(["all/luminox"])
  }
  mySearch: string = ""
  passData(d: string) {
    this.mySearch = d
  }
}
