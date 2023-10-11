import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieGenreDirective } from './pages/service-calls/movie-genre.directive';
import { ServiceCallsDirective } from './pages/service-calls/service-calls.directive';
import { MovieApiGenreService } from './service/movie-api-genre.service';
import { MovieApiServiceService } from './service/movie-api-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    ServiceCallsDirective,
    MovieGenreDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MovieApiServiceService, MovieApiGenreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
