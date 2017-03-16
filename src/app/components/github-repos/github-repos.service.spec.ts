import { TestBed, inject } from '@angular/core/testing';

import { GithubReposService } from './github-repos.service';

describe('GithubReposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubReposService]
    });
  });

  it('should ...', inject([GithubReposService], (service: GithubReposService) => {
    expect(service).toBeTruthy();
  }));
});
