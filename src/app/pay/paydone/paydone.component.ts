import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-paydone',
  templateUrl: './paydone.component.html',
  styleUrls: ['./paydone.component.scss']
})
export class PaydoneComponent implements OnInit {
  constructor(private _router: Router, public _location: Location) { }
  ngOnInit(): void {
  }
  getBack(): void {
    this._router.navigateByUrl("", { skipLocationChange: false }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    })
  }
  randNumber = Math.floor(Math.random() * 1000000);
}
