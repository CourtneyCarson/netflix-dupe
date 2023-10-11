import { Component, OnInit } from '@angular/core';
import { ServiceCallsDirective } from 'src/app/directives/service-calls/service-calls.directive';
import { MovieApiGenreService } from 'src/app/service/movie-api-genre.service';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent extends ServiceCallsDirective implements OnInit {
  constructor(
    movieService: MovieApiServiceService,
    genreService: MovieApiGenreService
  ) {
    super(movieService, genreService);
  }

  ngOnInit(): void {
    this.trendingMovies();
    // movie genres
    this.actionMovies();
    this.animationMovies();
    this.comedyMovies();
    this.dramaMovies();
    this.documentaryMovies();
    this.fantasyMovies();
    this.horrorMovies();
    this.mysteryMovies();
    this.scifiMovies();
    this.thrillerMovies();
    this.teenDramaMovies();
  }
}
