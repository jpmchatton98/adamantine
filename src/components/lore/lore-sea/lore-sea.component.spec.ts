import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreSeaComponent } from './lore-sea.component';

describe('LoreSeaComponent', () => {
  let component: LoreSeaComponent;
  let fixture: ComponentFixture<LoreSeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoreSeaComponent]
    });
    fixture = TestBed.createComponent(LoreSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
