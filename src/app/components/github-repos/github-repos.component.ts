import { Component, OnInit, Input } from '@angular/core';

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
  @Input() user: string = 'johnsonlin';

  constructor(private service: GithubReposService) { }

  ngOnInit() {
    this.service.getRepoNames(this.user).then(repoNames => {
      this.repoNames = repoNames;
    });
  }

}
