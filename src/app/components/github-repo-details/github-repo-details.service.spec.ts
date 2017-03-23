import { TestBed, inject } from '@angular/core/testing';

import { GithubRepoDetailsService } from './github-repo-details.service';

describe('GithubRepoDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubRepoDetailsService]
    });
  });

  it('should ...', inject([GithubRepoDetailsService], (service: GithubRepoDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
