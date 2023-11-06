import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriochartComponent } from './periochart.component';

describe('PeriochartComponent', () => {
  let component: PeriochartComponent;
  let fixture: ComponentFixture<PeriochartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriochartComponent]
    });
    fixture = TestBed.createComponent(PeriochartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
