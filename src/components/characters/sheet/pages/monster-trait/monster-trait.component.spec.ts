import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterTraitComponent } from './monster-trait.component';

describe('MonsterTraitComponent', () => {
  let component: MonsterTraitComponent;
  let fixture: ComponentFixture<MonsterTraitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonsterTraitComponent]
    });
    fixture = TestBed.createComponent(MonsterTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
