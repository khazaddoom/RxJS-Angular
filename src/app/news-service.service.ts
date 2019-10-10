import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  news$: Observable<string>;
  counter = 0;

  constructor() { 
    this.news$ = new Observable((observer) => {
      setInterval(() => {
        observer.next("This time ... " + this.counter++)
      }, 1500);
    })
  }

}
