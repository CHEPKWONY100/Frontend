import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page304Component } from './page304.component';

describe('Page304Component', () => {
  let component: Page304Component;
  let fixture: ComponentFixture<Page304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page304Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
