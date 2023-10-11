import { Injectable } from '@angular/core';
import { enviornment } from '../enviornment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieApiGenreService {
  constructor(private http: HttpClient) {}
  /**
   * Movie Genres
   */

  // action movies
  getActionMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=28`
    );
  }

  // animation movies
  getAnimationMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=16`
    );
  }

  // bollywood
  getBollywoodMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&language=hi`
    );
  }

  // comedy movies
  getComedyMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=35`
    );
  }

  // drama
  getDramaMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=18`
    );
  }

  // documentary
  getDocumentaryMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=99`
    );
  }

  // fantasy
  getFantasyMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=14`
    );
  }

  //  horror movies
  getHorrorMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=27`
    );
  }

  // get international movies
  getInternationalMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&language=en-US`
    );
  }
  // mystery
  getMysteryMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=9648`
    );
  }

  // sci fi
  getScienceFictionMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=878`
    );
  }

  // thriller
  getThrillerMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=53`
    );
  }

  //  teen drama
  getTeenDramaMovies(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/movie?api_key=${enviornment.API_KEY}&with_genres=10751`
    );
  }

  /**
   * TV Genres
   */

  // get action tv
  getActionTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&with_genres=28`
    );
  }

  // get animation tv
  getAnimationTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&with_genres=16`
    );
  }

  // get bollywood tv
  getBollywoodTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&language=hi`
    );
  }

  // get comedy tv
  getComedyTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&with_genres=35`
    );
  }

  // get drama tv
  getDramaTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&with_genres=18`
    );
  }

  // get documentary tv
  getDocumentaryTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&with_genres=99`
    );
  }

  // get fantasy tv
  getFantasyTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&with_genres=14`
    );
  }
  // get horror tv
  getHorrorTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&with_genres=27`
    );
  }

  // international tv
  getInternationalTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&language=en-US`
    );
  }

  // get mystery tv
  getMysteryTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&with_genres=9648`
    );
  }

  // get sci fi tv
  getScienceFictionTv(): Observable<any> {
    return this.http.get(
      ` ${enviornment.BASE_URL}/discover/tv?api_key=${enviornment.API_KEY}&with_genres=878`
    );
  }
}
