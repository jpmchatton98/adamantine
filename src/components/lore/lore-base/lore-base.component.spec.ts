import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreBaseComponent } from './lore-base.component';

describe('LoreBaseComponent', () => {
  let component: LoreBaseComponent;
  let fixture: ComponentFixture<LoreBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoreBaseComponent]
    });
    fixture = TestBed.createComponent(LoreBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
