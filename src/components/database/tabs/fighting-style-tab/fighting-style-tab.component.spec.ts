import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingStyleTabComponent } from './fighting-style-tab.component';

describe('FightingStyleTabComponent', () => {
  let component: FightingStyleTabComponent;
  let fixture: ComponentFixture<FightingStyleTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FightingStyleTabComponent]
    });
    fixture = TestBed.createComponent(FightingStyleTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
