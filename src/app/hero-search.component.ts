// src/app/hero-search.component.ts

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs';
import { Subject }           from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged }  from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// Observable class extensions

// Observable operators

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .pipe(debounceTime(300))        // wait 300ms after each keystroke before considering the term
      .pipe(distinctUntilChanged())   // ignore if next search term is same as previous
      .pipe(switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : of<Hero[]>([])))
      .pipe(catchError(error => {
        // TODO: add real error handling
        console.log(error);
        return of<Hero[]>([]);
      }));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
