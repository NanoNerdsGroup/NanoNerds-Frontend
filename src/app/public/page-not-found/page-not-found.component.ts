import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements  OnInit{
  invalidUrl : string ='';
  constructor(private _route: ActivatedRoute, private _router: Router) {
  }

  navigateToHome(){
    this._router.navigate(['home']).then();
  }

  ngOnInit() {
    this.invalidUrl = this._route.snapshot.url[0].path;
  }

}


