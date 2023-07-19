import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangedWeaponTabComponent } from './ranged-weapon-tab.component';

describe('RangedWeaponTabComponent', () => {
  let component: RangedWeaponTabComponent;
  let fixture: ComponentFixture<RangedWeaponTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangedWeaponTabComponent]
    });
    fixture = TestBed.createComponent(RangedWeaponTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
