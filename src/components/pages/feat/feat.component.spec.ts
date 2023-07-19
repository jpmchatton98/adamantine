import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatComponent } from './feat.component';

describe('FeatComponent', () => {
  let component: FeatComponent;
  let fixture: ComponentFixture<FeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatComponent]
    });
    fixture = TestBed.createComponent(FeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
