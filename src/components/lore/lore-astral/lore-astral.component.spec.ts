import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreAstralComponent } from './lore-astral.component';

describe('LoreAstralComponent', () => {
  let component: LoreAstralComponent;
  let fixture: ComponentFixture<LoreAstralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoreAstralComponent]
    });
    fixture = TestBed.createComponent(LoreAstralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
