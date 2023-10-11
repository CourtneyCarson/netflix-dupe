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
      // console.log('action movie data :D', data);
      this.movieGenres.actionMovieResult = data.results;
    });
  }

  // animation movies
  animationMovies() {
    this.genreService.getAnimationMovies().subscribe((data) => {
      // console.log('animation movie data :D', data);
      this.movieGenres.animationMovieResult = data.results;
    });
  }


  // comedy movies
  comedyMovies() {
    this.genreService.getComedyMovies().subscribe((data) => {
      // console.log('comedy movie data :D', data);
      this.movieGenres.comedyMovieResult = data.results;
    });
  }

  // drama movies
  dramaMovies() {
    this.genreService.getDramaMovies().subscribe((data) => {
      // console.log('drama movie data :D', data);
      this.movieGenres.dramaMovieResult = data.results;
    });
  }

  // documentary movies
  documentaryMovies() {
    this.genreService.getDocumentaryMovies().subscribe((data) => {
      // console.log('documentary movie data :D', data);
      this.movieGenres.documentaryMovieResult = data.results;
    });
  }

  // fantasy movies
  fantasyMovies() {
    this.genreService.getFantasyMovies().subscribe((data) => {
      // console.log('fantasy movie data :D', data);
      this.movieGenres.fantasyMovieResult = data.results;
    });
  }

  // horror movies
  horrorMovies() {
    this.genreService.getHorrorMovies().subscribe((data) => {
      // console.log('horror movie data :D', data);
      this.movieGenres.horrorMovieResult = data.results;
    });
  }


  // mystry movies
  mysteryMovies() {
    this.genreService.getMysteryMovies().subscribe((data) => {
      // console.log('mystry movie data :D', data);
      this.movieGenres.mystryMovieResult = data.results;
    });
  }


  // scifi movies
  scifiMovies() {
    this.genreService.getScienceFictionMovies().subscribe((data) => {
      // console.log('scifi movie data :D', data);
      this.movieGenres.scifiMovieResult = data.results;
    });
  }

  // thriller movies
  thrillerMovies() {
    this.genreService.getThrillerMovies().subscribe((data) => {
      // console.log('thriller movie data :D', data);
      this.movieGenres.thrillerMovieResult = data.results;
    });
  }

  // teen drama movies
  teenDramaMovies() {
    this.genreService.getTeenDramaMovies().subscribe((data) => {
      // console.log('teen drama movie data :D', data);
      this.movieGenres.teenDramaMovieResult = data.results;
    });
  }
  /*
   *TV Genres
   */

  // action movies
  actionTv() {
    this.genreService.getActionTv().subscribe((data) => {
      console.log('action movie data :D', data);
      this.tvGenres.actionTvResult = data.results;
    });
  }

  // animation tvs
  animationTv() {
    this.genreService.getAnimationTv().subscribe((data) => {
      // console.log('animation tv data :D', data);
      this.tvGenres.animationTvResult = data.results;
    });
  }



  // comedy tvs
  comedyTv() {
    this.genreService.getComedyTv().subscribe((data) => {
      // console.log('comedy tv data :D', data);
      this.tvGenres.comedyTvResult = data.results;
    });
  }

  // drama tvs
  dramaTv() {
    this.genreService.getDramaTv().subscribe((data) => {
      // console.log('drama tv data :D', data);
      this.tvGenres.dramaTvResult = data.results;
    });
  }

  // documentary tvs
  documentaryTv() {
    this.genreService.getDocumentaryTv().subscribe((data) => {
      // console.log('documentary tv data :D', data);
      this.tvGenres.documentaryTvResult = data.results;
    });
  }

  // fantasy tvs
  fantasyTv() {
    this.genreService.getFantasyTv().subscribe((data) => {
      // console.log('fantasy tv data :D', data);
      this.tvGenres.fantasyTvResult = data.results;
    });
  }

  // horror tvs
  horrorTv() {
    this.genreService.getHorrorTv().subscribe((data) => {
      // console.log('horror tv data :D', data);
      this.tvGenres.horrorTvResult = data.results;
    });
  }



  // mystry tvs
  mysteryTv() {
    this.genreService.getMysteryTv().subscribe((data) => {
      // console.log('mystry tv data :D', data);
      this.tvGenres.mystryTvResult = data.results;
    });
  }

 

  // scifi tvs
  scifiTv() {
    this.genreService.getScienceFictionTv().subscribe((data) => {
      // console.log('scifi tv data :D', data);
      this.tvGenres.scifiTvResult = data.results;
    });
  }

  // thriller tvs
  thrillerTv() {
    this.genreService.getThrillerTv().subscribe((data) => {
      // console.log('thriller tv data :D', data);
      this.tvGenres.thrillerTvResult = data.results;
    });
  }

  // teen drama tvs
  teenDramaTv() {
    this.genreService.getTeenDramaTv().subscribe((data) => {
      // console.log('teen drama tv data :D', data);
      this.tvGenres.teenDramaTvResult = data.results;
    });
  }
}
