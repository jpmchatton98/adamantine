import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTabComponent } from './vehicle-tab.component';

describe('VehicleTabComponent', () => {
  let component: VehicleTabComponent;
  let fixture: ComponentFixture<VehicleTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleTabComponent]
    });
    fixture = TestBed.createComponent(VehicleTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
