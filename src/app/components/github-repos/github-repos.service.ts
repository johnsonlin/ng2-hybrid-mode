import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubReposService {

  constructor(private http: Http) { }

  getRepos(userName:string='angular') {
    return this.http.get(`https://api.github.com/users/${userName}/repos`).toPromise();
  }

  getRepoNames(userName:string) {
    return this.getRepos(userName)
      .then(response => response.json().map((repo: any) => repo.name));
  }

}
