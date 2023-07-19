import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellTabComponent } from './spell-tab.component';

describe('SpellTabComponent', () => {
  let component: SpellTabComponent;
  let fixture: ComponentFixture<SpellTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpellTabComponent]
    });
    fixture = TestBed.createComponent(SpellTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
