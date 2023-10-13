import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingComponent } from './crafting.component';

describe('CraftingComponent', () => {
  let component: CraftingComponent;
  let fixture: ComponentFixture<CraftingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CraftingComponent]
    });
    fixture = TestBed.createComponent(CraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
