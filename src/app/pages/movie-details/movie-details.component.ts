import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private movieApiService: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

getMovieDetailResult: any = [];
getMovieVideoResult: any = [];
getMovieCastResult: any = [];


  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovieDetails(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovieDetails(id: any) {
    this.movieApiService.movieDetails(id).subscribe((res: any) => {
      console.log('movie details', res);
      this.getMovieDetailResult = res;
    });
  }

  // get video 
  getVideo(id: any) {
    this.movieApiService.getMovieVideo(id).subscribe((res: any) => {
      console.log('movie video', res);
      res.results.forEach((element:any) => {
        if(element.type === 'Trailer') {
          this.getMovieVideoResult = element.key; 
          console.log('movie video key', this.getMovieVideoResult.key);
        }
      });
    });
  }

  // get cast
  getCast(id: any) {
    this.movieApiService.getMovieCast(id).subscribe((res: any) => {
      console.log('movie cast', res);
      this.getMovieCastResult = res.cast;
    });
  }

}
