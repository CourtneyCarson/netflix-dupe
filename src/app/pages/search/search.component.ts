import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchMovieResults: any = [];

  constructor(private movieApiService: MovieApiServiceService) {}

  ngOnInit(): void {}

  searchForm = new FormGroup({
    movieName: new FormControl(),
  });

  submitForm() {
    console.log(this.searchForm.value);
    this.movieApiService
      .searchMovie(this.searchForm.value)
      .subscribe((data) => {
        console.log(data);
        this.searchMovieResults = data.results;
      });
  }
}
