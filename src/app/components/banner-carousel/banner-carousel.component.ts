import { Component, Input, OnInit } from '@angular/core';
import { ServiceCallsDirective } from 'src/app/directives/service-calls/service-calls.directive';
import { MovieApiGenreService } from 'src/app/service/movie-api-genre.service';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.css'],
})
export class BannerCarouselComponent
  extends ServiceCallsDirective
  implements OnInit
{
  @Input() banner: any = [];

  constructor(
    movieService: MovieApiServiceService,
    genreService: MovieApiGenreService
  ) {
    super(movieService, genreService);
  }

  ngOnInit(): void {
    // this.bannerData();
    // this.trendingMovies();
    // this.trendingTv();
  }
}
