import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProfileLoader } from './ngx-profile-loader';

describe('NgxProfileLoader', () => {
  let component: NgxProfileLoader;
  let fixture: ComponentFixture<NgxProfileLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxProfileLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxProfileLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
