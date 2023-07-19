import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundTabComponent } from './background-tab.component';

describe('BackgroundTabComponent', () => {
  let component: BackgroundTabComponent;
  let fixture: ComponentFixture<BackgroundTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundTabComponent]
    });
    fixture = TestBed.createComponent(BackgroundTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
