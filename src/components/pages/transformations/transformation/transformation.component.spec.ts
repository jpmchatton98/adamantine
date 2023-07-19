import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationComponent } from './transformation.component';

describe('TransformationComponent', () => {
  let component: TransformationComponent;
  let fixture: ComponentFixture<TransformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransformationComponent]
    });
    fixture = TestBed.createComponent(TransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
