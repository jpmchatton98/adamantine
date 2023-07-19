import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderChoiceComponent } from './builder-choice.component';

describe('BuilderChoiceComponent', () => {
  let component: BuilderChoiceComponent;
  let fixture: ComponentFixture<BuilderChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderChoiceComponent]
    });
    fixture = TestBed.createComponent(BuilderChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
