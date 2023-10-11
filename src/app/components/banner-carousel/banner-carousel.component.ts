import { Component, Input } from '@angular/core';

@Component({
  selector: 'banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.css'],
})
export class BannerCarouselComponent {
  @Input() banner: any = [];
}
