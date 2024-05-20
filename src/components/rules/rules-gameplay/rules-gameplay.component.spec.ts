import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesGameplayComponent } from './rules-gameplay.component';

describe('RulesGameplayComponent', () => {
  let component: RulesGameplayComponent;
  let fixture: ComponentFixture<RulesGameplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesGameplayComponent]
    });
    fixture = TestBed.createComponent(RulesGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
