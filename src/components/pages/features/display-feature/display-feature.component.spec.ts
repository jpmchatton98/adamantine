import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFeatureComponent } from './display-feature.component';

describe('DisplayFeatureComponent', () => {
  let component: DisplayFeatureComponent;
  let fixture: ComponentFixture<DisplayFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFeatureComponent]
    });
    fixture = TestBed.createComponent(DisplayFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
