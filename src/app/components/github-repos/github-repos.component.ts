import { Component, OnInit } from '@angular/core';

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

  constructor(private service: GithubReposService) { }

  ngOnInit() {
    this.service.getRepoNames().then(repoNames => {
      this.repoNames = repoNames;
    });
  }

}
