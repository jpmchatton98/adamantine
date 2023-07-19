import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatTabComponent } from './feat-tab.component';

describe('FeatTabComponent', () => {
  let component: FeatTabComponent;
  let fixture: ComponentFixture<FeatTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatTabComponent]
    });
    fixture = TestBed.createComponent(FeatTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
