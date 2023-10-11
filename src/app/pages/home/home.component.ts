import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieApiServiceService) {}

  ngOnInit(): void {
    this.bannerMovieData();
  }

  // banner data
  bannerMovieData() {
    this.movieService.bannerApiData().subscribe((data) => {
      console.log('movie data :D', data);
    });
  }
}
