import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-myfavorite',
  templateUrl: './myfavorite.component.html',
  styleUrls: ['./myfavorite.component.scss']
})
export class MyfavoriteComponent implements OnInit {
  collection1: any = [];
  show: any = true;
  constructor(private service: DataService, private router: Router, public location: Location) {
  }
  ngOnInit(): void {
    this.collection1 = this.service.getCollection1();
  }
  addCart(item: any) {
    this.service.addToCollection(item);
  }
  getDelate(item: any) {
    this.service.removeFromFavorite(item);
    if (this.collection1 == 0) {
      this.router
        .navigateByUrl('/', { skipLocationChange: false })
        .then(() => {
          this.router.navigate([decodeURI(this.location.path())]);
        })
    }
  }
}
