import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgxSkeletonLoader, NgxTableLoader, NgxProfileLoader, NgxCardLoader } from '@anzflex/ngx-skeleton-loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSkeletonLoader, NgxTableLoader, NgxProfileLoader, NgxCardLoader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('anzflex-skeleton-loader');
}
