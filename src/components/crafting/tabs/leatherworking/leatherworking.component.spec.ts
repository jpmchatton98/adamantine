import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatherworkingComponent } from './leatherworking.component';

describe('LeatherworkingComponent', () => {
  let component: LeatherworkingComponent;
  let fixture: ComponentFixture<LeatherworkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeatherworkingComponent]
    });
    fixture = TestBed.createComponent(LeatherworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
