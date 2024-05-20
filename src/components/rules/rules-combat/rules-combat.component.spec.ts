import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesCombatComponent } from './rules-combat.component';

describe('RulesCombatComponent', () => {
  let component: RulesCombatComponent;
  let fixture: ComponentFixture<RulesCombatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesCombatComponent]
    });
    fixture = TestBed.createComponent(RulesCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
