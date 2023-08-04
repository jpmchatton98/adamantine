import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetUsesComponent } from './sheet-uses.component';

describe('SheetUsesComponent', () => {
  let component: SheetUsesComponent;
  let fixture: ComponentFixture<SheetUsesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SheetUsesComponent]
    });
    fixture = TestBed.createComponent(SheetUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
