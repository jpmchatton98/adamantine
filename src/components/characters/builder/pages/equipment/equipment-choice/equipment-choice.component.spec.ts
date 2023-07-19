import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentChoiceComponent } from './equipment-choice.component';

describe('EquipmentChoiceComponent', () => {
  let component: EquipmentChoiceComponent;
  let fixture: ComponentFixture<EquipmentChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentChoiceComponent]
    });
    fixture = TestBed.createComponent(EquipmentChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
