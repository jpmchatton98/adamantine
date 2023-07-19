import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorTabComponent } from './armor-tab.component';

describe('ArmorTabComponent', () => {
  let component: ArmorTabComponent;
  let fixture: ComponentFixture<ArmorTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmorTabComponent]
    });
    fixture = TestBed.createComponent(ArmorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
