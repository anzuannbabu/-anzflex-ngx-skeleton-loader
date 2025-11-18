import { Component, input } from '@angular/core';

@Component({
  selector: 'ngx-skeleton-loader',
  imports: [],
  template: `
   <div class="loader-placeholder" 
    [style.height]="height()" 
    [style.backgroundColor]="color()"
    [style.width]="width()" 
    [style.borderRadius]="radius()"
    [style.marginTop]="margin().top"
    [style.marginBottom]="margin().bottom"
    [style.marginLeft]="margin().left"
    [style.marginRight]="margin().right"

    ></div>
  `,
  styleUrl: 'ngx-skeleton-loader.css',
})
export class NgxSkeletonLoader {
  height = input<string>('18px')
  color = input<string>('f0f0f0')
  width = input<string>('100%')
  radius = input<string>('6px');
  margin = input<{ top?: string, bottom?: string, left?: string, right?: string }>({
    top: '0',
    bottom: '0',
    left: '0',
    right: '0'
  })
}
