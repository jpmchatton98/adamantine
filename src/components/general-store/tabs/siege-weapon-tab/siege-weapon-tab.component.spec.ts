import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiegeWeaponTabComponent } from './siege-weapon-tab.component';

describe('SiegeWeaponTabComponent', () => {
  let component: SiegeWeaponTabComponent;
  let fixture: ComponentFixture<SiegeWeaponTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiegeWeaponTabComponent]
    });
    fixture = TestBed.createComponent(SiegeWeaponTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
