import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-carderror',
  templateUrl: './carderror.component.html',
  styleUrls: ['./carderror.component.scss']
})
export class CarderrorComponent implements OnInit {

  constructor(private _router: Router, public _location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this._router.navigateByUrl("", { skipLocationChange: false }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
     
    })
  }











  getBack(pageName: string) {
    this._router.navigate([`${pageName}`])

  }

}
