import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class WikiSearchService {

  constructor(private jsonp: Jsonp) { }

  search(keyword$: Observable<string>, debounceMS: number = 300) {
    return keyword$
      .debounceTime(debounceMS)
      .distinctUntilChanged()
      .filter(keyword => keyword.length > 0)
      .switchMap(keyword => this.wikiSearch(keyword))
      .map((results) => this.constructResults(results))
  }

  private wikiSearch(keyword: string) {
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('format', 'json');
    search.set('search', keyword);

    return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
      .map(response => response.json());
  }


  private constructResults(results) {
    const titles = results[1];
    const links = results[3];
    return titles.reduce((accumulator, title, index) => {
      accumulator.push({title, link: links[index]});

      return accumulator;
    }, []);
  }
}
