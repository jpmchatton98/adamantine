import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticlassingTabComponent } from './multiclassing-tab.component';

describe('MulticlassingTabComponent', () => {
  let component: MulticlassingTabComponent;
  let fixture: ComponentFixture<MulticlassingTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MulticlassingTabComponent]
    });
    fixture = TestBed.createComponent(MulticlassingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
