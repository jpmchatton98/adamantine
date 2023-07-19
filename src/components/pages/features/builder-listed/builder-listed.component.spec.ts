import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderListedComponent } from './builder-listed.component';

describe('BuilderListedComponent', () => {
  let component: BuilderListedComponent;
  let fixture: ComponentFixture<BuilderListedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderListedComponent]
    });
    fixture = TestBed.createComponent(BuilderListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
