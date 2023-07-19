import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmTabComponent } from './firearm-tab.component';

describe('FirearmTabComponent', () => {
  let component: FirearmTabComponent;
  let fixture: ComponentFixture<FirearmTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirearmTabComponent]
    });
    fixture = TestBed.createComponent(FirearmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
