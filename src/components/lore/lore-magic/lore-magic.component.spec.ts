import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreMagicComponent } from './lore-magic.component';

describe('LoreMagicComponent', () => {
  let component: LoreMagicComponent;
  let fixture: ComponentFixture<LoreMagicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoreMagicComponent]
    });
    fixture = TestBed.createComponent(LoreMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
