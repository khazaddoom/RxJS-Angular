import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  news$ = interval(1000)
          .pipe(
            map(x => x * Math.random()),
            take(10)
          );
  counter = 0;

  constructor() {}

}
