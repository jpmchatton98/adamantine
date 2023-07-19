import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTabComponent } from './score-tab.component';

describe('ScoreTabComponent', () => {
  let component: ScoreTabComponent;
  let fixture: ComponentFixture<ScoreTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreTabComponent]
    });
    fixture = TestBed.createComponent(ScoreTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
