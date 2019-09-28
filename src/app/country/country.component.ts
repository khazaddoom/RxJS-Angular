import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryName: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {

      this._route.params.subscribe((params: Params) => {
        this.countryName = params['id']
      });

  }

  ngOnChanges() {
  }

}
