import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesCharacterComponent } from './rules-character.component';

describe('RulesCharacterComponent', () => {
  let component: RulesCharacterComponent;
  let fixture: ComponentFixture<RulesCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesCharacterComponent]
    });
    fixture = TestBed.createComponent(RulesCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
