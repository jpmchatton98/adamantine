import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfLevelComponent } from './tf-level.component';

describe('TfLevelComponent', () => {
  let component: TfLevelComponent;
  let fixture: ComponentFixture<TfLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TfLevelComponent]
    });
    fixture = TestBed.createComponent(TfLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
