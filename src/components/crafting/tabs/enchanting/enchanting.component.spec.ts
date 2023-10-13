import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantingComponent } from './enchanting.component';

describe('EnchantingComponent', () => {
  let component: EnchantingComponent;
  let fixture: ComponentFixture<EnchantingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnchantingComponent]
    });
    fixture = TestBed.createComponent(EnchantingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
