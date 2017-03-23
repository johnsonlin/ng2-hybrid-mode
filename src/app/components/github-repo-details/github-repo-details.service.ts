import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubRepoDetailsService {

  constructor(private http: Http) { }

  getDetails(userName: string, repo: string) {
    return this.http.get(`https://api.github.com/repos/${userName}/${repo}`)
      .map(response => response.json())
      .toPromise();
  }
}
