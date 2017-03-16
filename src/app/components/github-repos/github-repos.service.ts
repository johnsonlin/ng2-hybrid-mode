import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubReposService {

  constructor(private http: Http) { }

  getRepos(orgName:string='angular') {
    return this.http.get(`https://api.github.com/users/${orgName}/repos`).toPromise();
  }

  getRepoNames() {
    return this.getRepos()
      .then(response => response.json().map((repo: any) => repo.name));
  }

}
