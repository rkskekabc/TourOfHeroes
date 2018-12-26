import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`api/heroes/?name=${term}`)
      .pipe(map(response => response.json().data as Hero[]));
  }
}
