import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTabComponent } from './generic-tab.component';

describe('GenericTabComponent', () => {
  let component: GenericTabComponent;
  let fixture: ComponentFixture<GenericTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericTabComponent]
    });
    fixture = TestBed.createComponent(GenericTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
