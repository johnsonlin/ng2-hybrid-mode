import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubReposService } from './github-repos.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css'],
  providers: [
    GithubReposService
  ]
})
export class GithubReposComponent implements OnInit {
  repoNames: string[];
  @Input() user: string;
  @Output() repos = new EventEmitter<any[]>();

  constructor(private service: GithubReposService) { }

  ngOnInit() {
    this.searchReposByUser(this.user);
  }

  ngOnChanges() {
    this.searchReposByUser(this.user);
  }

  private searchReposByUser(user) {
    new Promise((resolve, reject) => {
      if (!!user) {
        this.service.getRepoNames(this.user).then(repoNames => {
          resolve(repoNames);
        });
      } else {
        resolve([]);
      }
    })
      .then((repoNames:string[]) => {
        this.repoNames = repoNames;
        this.repos.emit(repoNames);
      });
  }

}
