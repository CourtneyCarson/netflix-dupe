import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}
  BASE_URL = 'https://api.themoviedb.org/3';
  API_KEY = '08cc33bd5ae3a747598ce2ad84376e66';


  bannerApiData(): Observable<any> {
    return this.http.get(
      ` ${this.BASE_URL}/trending/all/week?api_key=${this.API_KEY}&language=en-US`
    );
  }

  // trending movie api data 
  trendingMovies(): Observable<any> {
    return this.http.get(
      ` ${this.BASE_URL}/trending/movie/day?api_key=${this.API_KEY}&language=en-US`
    );
  }
}
