import { Component, OnInit } from '@angular/core';
import { ServiceCallsDirective } from 'src/app/directives/service-calls/service-calls.directive';
import { MovieApiGenreService } from 'src/app/service/movie-api-genre.service';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent extends ServiceCallsDirective implements OnInit {

  constructor(
    movieService: MovieApiServiceService,
    genreService: MovieApiGenreService
  ) {
    super(movieService, genreService);
  }

  ngOnInit(): void {
    this.trendingTv();
    this.actionTv();
    this.animationTv();
    this.bollywoodTv();
    this.comedyTv();
    this.dramaTv();
    this.documentaryTv();
    this.fantasyTv();
    this.horrorTv();
    this.internationalTv();
    this.mysteryTv();
    this.romanceTv();
    this.scifiTv();
    this.thrillerTv();
    this.teenDramaTv();
  }

}
