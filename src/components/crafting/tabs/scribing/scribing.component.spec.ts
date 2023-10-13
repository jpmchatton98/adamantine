import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScribingComponent } from './scribing.component';

describe('ScribingComponent', () => {
  let component: ScribingComponent;
  let fixture: ComponentFixture<ScribingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScribingComponent]
    });
    fixture = TestBed.createComponent(ScribingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
