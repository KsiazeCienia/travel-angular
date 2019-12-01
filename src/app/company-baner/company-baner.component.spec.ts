import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBanerComponent } from './company-baner.component';

describe('CompanyBanerComponent', () => {
  let component: CompanyBanerComponent;
  let fixture: ComponentFixture<CompanyBanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
