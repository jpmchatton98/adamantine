import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentItemComponent } from './equipment-item.component';

describe('EquipmentItemComponent', () => {
  let component: EquipmentItemComponent;
  let fixture: ComponentFixture<EquipmentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentItemComponent]
    });
    fixture = TestBed.createComponent(EquipmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
