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
      this.movieGenres.actionMovieResult = data.results;
    });
  }

  // animation movies
  animationMovies() {
    this.genreService.getAnimationMovies().subscribe((data) => {
      this.movieGenres.animationMovieResult = data.results;
    });
  }

  // comedy movies
  comedyMovies() {
    this.genreService.getComedyMovies().subscribe((data) => {
      this.movieGenres.comedyMovieResult = data.results;
    });
  }

  // drama movies
  dramaMovies() {
    this.genreService.getDramaMovies().subscribe((data) => {
      this.movieGenres.dramaMovieResult = data.results;
    });
  }

  // documentary movies
  documentaryMovies() {
    this.genreService.getDocumentaryMovies().subscribe((data) => {
      this.movieGenres.documentaryMovieResult = data.results;
    });
  }

  // fantasy movies
  fantasyMovies() {
    this.genreService.getFantasyMovies().subscribe((data) => {
      this.movieGenres.fantasyMovieResult = data.results;
    });
  }

  // horror movies
  horrorMovies() {
    this.genreService.getHorrorMovies().subscribe((data) => {
      this.movieGenres.horrorMovieResult = data.results;
    });
  }

  // mystry movies
  mysteryMovies() {
    this.genreService.getMysteryMovies().subscribe((data) => {
      this.movieGenres.mystryMovieResult = data.results;
    });
  }

  // scifi movies
  scifiMovies() {
    this.genreService.getScienceFictionMovies().subscribe((data) => {
      this.movieGenres.scifiMovieResult = data.results;
    });
  }

  // thriller movies
  thrillerMovies() {
    this.genreService.getThrillerMovies().subscribe((data) => {
      this.movieGenres.thrillerMovieResult = data.results;
    });
  }

  // teen drama movies
  teenDramaMovies() {
    this.genreService.getTeenDramaMovies().subscribe((data) => {
      this.movieGenres.teenDramaMovieResult = data.results;
    });
  }
  /*
   *TV Genres
   */

  // action movies
  actionTv() {
    this.genreService.getActionTv().subscribe((data) => {
      this.tvGenres.actionTvResult = data.results;
    });
  }

  // animation tvs
  animationTv() {
    this.genreService.getAnimationTv().subscribe((data) => {
      this.tvGenres.animationTvResult = data.results;
    });
  }

  // comedy tvs
  comedyTv() {
    this.genreService.getComedyTv().subscribe((data) => {
      this.tvGenres.comedyTvResult = data.results;
    });
  }

  // drama tvs
  dramaTv() {
    this.genreService.getDramaTv().subscribe((data) => {
      this.tvGenres.dramaTvResult = data.results;
    });
  }

  // documentary tvs
  documentaryTv() {
    this.genreService.getDocumentaryTv().subscribe((data) => {
      this.tvGenres.documentaryTvResult = data.results;
    });
  }

  // fantasy tvs
  fantasyTv() {
    this.genreService.getFantasyTv().subscribe((data) => {
      this.tvGenres.fantasyTvResult = data.results;
    });
  }

  // horror tvs
  horrorTv() {
    this.genreService.getHorrorTv().subscribe((data) => {
      this.tvGenres.horrorTvResult = data.results;
    });
  }

  // mystry tvs
  mysteryTv() {
    this.genreService.getMysteryTv().subscribe((data) => {
      this.tvGenres.mystryTvResult = data.results;
    });
  }

  // scifi tvs
  scifiTv() {
    this.genreService.getScienceFictionTv().subscribe((data) => {
      this.tvGenres.scifiTvResult = data.results;
    });
  }

  // thriller tvs
  thrillerTv() {
    this.genreService.getThrillerTv().subscribe((data) => {
      this.tvGenres.thrillerTvResult = data.results;
    });
  }

  // teen drama tvs
  teenDramaTv() {
    this.genreService.getTeenDramaTv().subscribe((data) => {
      this.tvGenres.teenDramaTvResult = data.results;
    });
  }
}
