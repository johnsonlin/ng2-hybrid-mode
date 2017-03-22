import { Component, OnInit } from '@angular/core';

import { WikiSearchService } from './wiki-search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css'],
  providers: [
    WikiSearchService
  ]
})
export class WikiSearchComponent implements OnInit {
  keyword$ = new Subject<string>();
  private results: string[];

  constructor(private service: WikiSearchService) { }

  ngOnInit() {
    this.service.search(this.keyword$)
      .subscribe((results) => {
        this.results = results;
      })
  }

  search(keyword:string) {
    this.keyword$.next(keyword);
  }

}
