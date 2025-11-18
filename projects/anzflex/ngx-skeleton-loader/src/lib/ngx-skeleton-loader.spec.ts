import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSkeletonLoader } from './ngx-skeleton-loader';

describe('NgxSkeletonLoader', () => {
  let component: NgxSkeletonLoader;
  let fixture: ComponentFixture<NgxSkeletonLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSkeletonLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSkeletonLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
