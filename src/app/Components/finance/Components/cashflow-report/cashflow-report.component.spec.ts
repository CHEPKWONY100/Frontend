import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowReportComponent } from './cashflow-report.component';

describe('CashflowReportComponent', () => {
  let component: CashflowReportComponent;
  let fixture: ComponentFixture<CashflowReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashflowReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
