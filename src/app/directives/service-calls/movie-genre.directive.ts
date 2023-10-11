import { Directive } from '@angular/core';
import {
  MovieGenres,
  TvGenres,
} from 'src/app/service/interfaces/genres.interface';
import { MovieApiGenreService } from 'src/app/service/movie-api-genre.service';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Directive({
  selector: '[appMovieGenre]',
})
export class MovieGenreDirective {
  movieGenres: MovieGenres | any = [];
  tvGenres: TvGenres | any = [];

  constructor(
    public movieService: MovieApiServiceService,
    public genreService: MovieApiGenreService
  ) {}

  /*
   *Movie Genres
   */

  // action movies
  actionMovies() {
    this.genreService.getActionMovies().subscribe((data) => {
      console.log('action movie data :D', data);
      this.movieGenres.actionMovieResult = data.results;
    });
  }

  // animation movies
  animationMovies() {
    this.genreService.getAnimationMovies().subscribe((data) => {
      console.log('animation movie data :D', data);
      this.movieGenres.animationMovieResult = data.results;
    });
  }

  // bollywood movies
  bollywoodMovies() {
    this.genreService.getBollywoodMovies().subscribe((data) => {
      console.log('bollywood movie data :D', data);
      this.movieGenres.bollywoodMovieResult = data.results;
    });
  }

  // comedy movies
  comedyMovies() {
    this.genreService.getComedyMovies().subscribe((data) => {
      console.log('comedy movie data :D', data);
      this.movieGenres.comedyMovieResult = data.results;
    });
  }

  // drama movies
  dramaMovies() {
    this.genreService.getDramaMovies().subscribe((data) => {
      console.log('drama movie data :D', data);
      this.movieGenres.dramaMovieResult = data.results;
    });
  }

  // documentary movies
  documentaryMovies() {
    this.genreService.getDocumentaryMovies().subscribe((data) => {
      console.log('documentary movie data :D', data);
      this.movieGenres.documentaryMovieResult = data.results;
    });
  }

  // fantasy movies
  fantasyMovies() {
    this.genreService.getFantasyMovies().subscribe((data) => {
      console.log('fantasy movie data :D', data);
      this.movieGenres.fantasyMovieResult = data.results;
    });
  }

  // horror movies
  horrorMovies() {
    this.genreService.getHorrorMovies().subscribe((data) => {
      console.log('horror movie data :D', data);
      this.movieGenres.fantasyMovieResult = data.results;
    });
  }

  // international movies
  internationalMovies() {
    this.genreService.getInternationalMovies().subscribe((data) => {
      console.log('international movie data :D', data);
      this.movieGenres.internationalMovieResult = data.results;
    });
  }

  // mystry movies
  mysteryMovies() {
    this.genreService.getMysteryMovies().subscribe((data) => {
      console.log('mystry movie data :D', data);
      this.movieGenres.mystryMovieResult = data.results;
    });
  }

  // romance movies
  romanceMovies() {
    this.genreService.getRomanceMovies().subscribe((data) => {
      console.log('romance movie data :D', data);
      this.movieGenres.romanceMovieResult = data.results;
    });
  }

  // scifi movies
  scifiMovies() {
    this.genreService.getScienceFictionMovies().subscribe((data) => {
      console.log('scifi movie data :D', data);
      this.movieGenres.scifiMovieResult = data.results;
    });
  }

  // thriller movies
  thrillerMovies() {
    this.genreService.getThrillerMovies().subscribe((data) => {
      console.log('thriller movie data :D', data);
      this.movieGenres.thrillerMovieResult = data.results;
    });
  }

  // teen drama movies
  teenDramaMovies() {
    this.genreService.getTeenDramaMovies().subscribe((data) => {
      console.log('teen drama movie data :D', data);
      this.movieGenres.teenDramaMovieResult = data.results;
    });
  }
}
