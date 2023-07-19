import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceTabComponent } from './race-tab.component';

describe('RaceTabComponent', () => {
  let component: RaceTabComponent;
  let fixture: ComponentFixture<RaceTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceTabComponent]
    });
    fixture = TestBed.createComponent(RaceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
