import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksmithingComponent } from './blacksmithing.component';

describe('BlacksmithingComponent', () => {
  let component: BlacksmithingComponent;
  let fixture: ComponentFixture<BlacksmithingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlacksmithingComponent]
    });
    fixture = TestBed.createComponent(BlacksmithingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
