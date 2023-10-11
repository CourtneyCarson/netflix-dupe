import { TestBed } from '@angular/core/testing';

import { MovieApiGenreService } from './movie-api-genre.service';

describe('MovieApiGenreService', () => {
  let service: MovieApiGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
