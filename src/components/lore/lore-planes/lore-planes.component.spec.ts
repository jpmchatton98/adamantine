import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorePlanesComponent } from './lore-planes.component';

describe('LorePlanesComponent', () => {
  let component: LorePlanesComponent;
  let fixture: ComponentFixture<LorePlanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LorePlanesComponent]
    });
    fixture = TestBed.createComponent(LorePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
