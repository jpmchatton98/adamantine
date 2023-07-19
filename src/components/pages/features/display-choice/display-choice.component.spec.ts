import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChoiceComponent } from './display-choice.component';

describe('DisplayChoiceComponent', () => {
  let component: DisplayChoiceComponent;
  let fixture: ComponentFixture<DisplayChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayChoiceComponent]
    });
    fixture = TestBed.createComponent(DisplayChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
