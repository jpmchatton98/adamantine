import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoTabComponent } from './ammo-tab.component';

describe('AmmoTabComponent', () => {
  let component: AmmoTabComponent;
  let fixture: ComponentFixture<AmmoTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmmoTabComponent]
    });
    fixture = TestBed.createComponent(AmmoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
