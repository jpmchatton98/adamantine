import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationTabComponent } from './transformation-tab.component';

describe('TransformationTabComponent', () => {
  let component: TransformationTabComponent;
  let fixture: ComponentFixture<TransformationTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransformationTabComponent]
    });
    fixture = TestBed.createComponent(TransformationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
