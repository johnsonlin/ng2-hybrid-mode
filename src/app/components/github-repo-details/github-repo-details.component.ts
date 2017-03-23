import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubRepoDetailsService } from './github-repo-details.service';

@Component({
  selector: 'app-github-repo-details',
  templateUrl: './github-repo-details.component.html',
  styleUrls: ['./github-repo-details.component.css'],
  providers: [
    GithubRepoDetailsService
  ]
})
export class GithubRepoDetailsComponent implements OnInit {
  private repoDetails: any;

  constructor(private service: GithubRepoDetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.service.getDetails(params['user'], params['repo'])
      .then((data) => {
        this.repoDetails = data;
      });
  }

}
