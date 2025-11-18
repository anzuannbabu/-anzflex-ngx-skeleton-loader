import { Component, input } from '@angular/core';

@Component({
  selector: 'ngx-card-skeleton-loader',
  imports: [],
  templateUrl: './ngx-card-loader.html',
  styleUrl: './ngx-card-loader.css',
})
export class NgxCardLoader {
  width = input<string>('100%');
  radius = input<string>('6px')
  imageHeight = input<string>('200px');
}
