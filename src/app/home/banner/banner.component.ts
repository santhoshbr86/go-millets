import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  // showNavigationArrows = false;
  @Input() imageSize;
  images = [];
   constructor(private config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
  }
// https://picsum.photos/${this.imageSize.width}/${this.imageSize.height}?random&t=${Math.random()}
  ngOnInit() {
    this.images = [4, 2, 1].map((d) => `/assets/images/banner-${d}.jpg`);
  }

}
