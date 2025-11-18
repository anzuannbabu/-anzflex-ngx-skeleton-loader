import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCardLoader } from './ngx-card-loader';

describe('NgxCardLoader', () => {
  let component: NgxCardLoader;
  let fixture: ComponentFixture<NgxCardLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCardLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCardLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
