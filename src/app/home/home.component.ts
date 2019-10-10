import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  somevalue;
  constructor(private _newService: NewsServiceService) {}

  ngOnInit() {
    this.somevalue = this._newService.news$;
  }

}
