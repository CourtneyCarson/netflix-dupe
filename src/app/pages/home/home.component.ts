import { Component, OnInit } from '@angular/core';
import { MovieApiGenreService } from 'src/app/service/movie-api-genre.service';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ServiceCallsDirective } from '../../directives/service-calls/service-calls.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends ServiceCallsDirective implements OnInit {
  constructor(
    movieService: MovieApiServiceService,
    genreService: MovieApiGenreService
  ) {
    super(movieService, genreService);
  }

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovies();
    this.actionMovies();
    this.animationMovies();
    this.bollywoodMovies();
    this.comedyMovies();
    this.dramaMovies();
    this.documentaryMovies();
    this.fantasyMovies();
    this.horrorMovies();
    this.internationalMovies();
    this.mysteryMovies();
    this.romanceMovies();
    this.scifiMovies();
    this.thrillerMovies();
    this.teenDramaMovies();
  }
}
