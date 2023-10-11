import { Component, Input } from '@angular/core';

@Component({
  selector: 'genre-poster',
  templateUrl: './genre-poster.component.html',
  styleUrls: ['./genre-poster.component.css'],
})
export class GenrePosterComponent {
  @Input() genres: any = [];
}
