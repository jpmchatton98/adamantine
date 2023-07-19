import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicItemComponent } from './magic-item.component';

describe('MagicItemComponent', () => {
  let component: MagicItemComponent;
  let fixture: ComponentFixture<MagicItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagicItemComponent]
    });
    fixture = TestBed.createComponent(MagicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
