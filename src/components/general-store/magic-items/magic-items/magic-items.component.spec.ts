import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicItemsComponent } from './magic-items.component';

describe('MagicItemsComponent', () => {
  let component: MagicItemsComponent;
  let fixture: ComponentFixture<MagicItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagicItemsComponent]
    });
    fixture = TestBed.createComponent(MagicItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
