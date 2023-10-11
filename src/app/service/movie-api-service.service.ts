import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviornment } from '../enviornment';
@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  bannerApiData(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/trending/all/week?api_key=${enviornment.API_KEY}&language=en-US`
    );
  }

  // trending movie api data
  trendingMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/trending/movie/day?api_key=${enviornment.API_KEY}&language=en-US`
    );
  }

  trendingTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/trending/tv/day?api_key=${enviornment.API_KEY}&language=en-US`
    );
  }

  // search
  searchMovie(data: any): Observable<any> {
    console.log(data);
    return this.http.get(
      ` ${enviornment.BASE_URL}/search/movie?api_key=${enviornment.API_KEY}&language=en-US&query=${data.movieName}`
    );
  }

  // movie details
  movieDetails(id: any): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/movie/${id}?api_key=${enviornment.API_KEY}&language=en-US`
    );
  }

  // get movie video
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/movie/${data}/videos?api_key=${enviornment.API_KEY}&language=en-US`
    );
  }
  // get cast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/movie/${data}/credits?api_key=${enviornment.API_KEY}&language=en-US`
    );
  }

  
}
