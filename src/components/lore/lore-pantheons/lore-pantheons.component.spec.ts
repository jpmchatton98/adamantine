import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorePantheonsComponent } from './lore-pantheons.component';

describe('LorePantheonsComponent', () => {
  let component: LorePantheonsComponent;
  let fixture: ComponentFixture<LorePantheonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LorePantheonsComponent]
    });
    fixture = TestBed.createComponent(LorePantheonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
