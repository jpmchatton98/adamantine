import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesBaseComponent } from './rules-base.component';

describe('RulesBaseComponent', () => {
  let component: RulesBaseComponent;
  let fixture: ComponentFixture<RulesBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesBaseComponent]
    });
    fixture = TestBed.createComponent(RulesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
