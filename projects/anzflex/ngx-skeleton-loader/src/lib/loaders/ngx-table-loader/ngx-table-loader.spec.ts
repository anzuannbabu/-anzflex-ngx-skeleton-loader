import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableLoader } from './ngx-table-loader';

describe('NgxTableLoader', () => {
  let component: NgxTableLoader;
  let fixture: ComponentFixture<NgxTableLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTableLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTableLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
