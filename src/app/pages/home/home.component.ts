import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieApiServiceService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovies();
  }

  // get banner area data
  bannerData() {
    this.movieService.bannerApiData().subscribe((data) => {
      console.log('movie data :D', data);
      this.bannerResult = data.results;
    });
  }

  trendingMovies() {
    this.movieService.trendingMovies().subscribe((data) => {
      console.log('trending movie data :D', data);
      this.trendingMovieResult = data.results;
    });
  }
}
