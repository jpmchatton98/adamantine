import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetChoiceComponent } from './sheet-choice.component';

describe('SheetChoiceComponent', () => {
  let component: SheetChoiceComponent;
  let fixture: ComponentFixture<SheetChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SheetChoiceComponent]
    });
    fixture = TestBed.createComponent(SheetChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
