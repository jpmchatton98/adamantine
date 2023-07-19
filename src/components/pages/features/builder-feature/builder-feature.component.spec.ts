import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderFeatureComponent } from './builder-feature.component';

describe('BuilderFeatureComponent', () => {
  let component: BuilderFeatureComponent;
  let fixture: ComponentFixture<BuilderFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderFeatureComponent]
    });
    fixture = TestBed.createComponent(BuilderFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
