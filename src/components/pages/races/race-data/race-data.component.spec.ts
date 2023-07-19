import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceDataComponent } from './race-data.component';

describe('RaceDataComponent', () => {
  let component: RaceDataComponent;
  let fixture: ComponentFixture<RaceDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceDataComponent]
    });
    fixture = TestBed.createComponent(RaceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
