import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetFeatureComponent } from './sheet-feature.component';

describe('SheetFeatureComponent', () => {
  let component: SheetFeatureComponent;
  let fixture: ComponentFixture<SheetFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SheetFeatureComponent]
    });
    fixture = TestBed.createComponent(SheetFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
