import { Component, input } from '@angular/core';

@Component({
  selector: 'ngx-profile-skeleton-loader',
  imports: [],
  templateUrl: './ngx-profile-loader.html',
  styleUrl: './ngx-profile-loader.css',
})
export class NgxProfileLoader {
  width = input<string>('300px')
  radius = input<string>('12px')
}
