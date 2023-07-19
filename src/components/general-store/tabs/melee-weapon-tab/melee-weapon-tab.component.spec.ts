import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeWeaponTabComponent } from './melee-weapon-tab.component';

describe('MeleeWeaponTabComponent', () => {
  let component: MeleeWeaponTabComponent;
  let fixture: ComponentFixture<MeleeWeaponTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeleeWeaponTabComponent]
    });
    fixture = TestBed.createComponent(MeleeWeaponTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
