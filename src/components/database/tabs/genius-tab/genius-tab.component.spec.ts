import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeniusTabComponent } from './genius-tab.component';

describe('GeniusTabComponent', () => {
  let component: GeniusTabComponent;
  let fixture: ComponentFixture<GeniusTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeniusTabComponent]
    });
    fixture = TestBed.createComponent(GeniusTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
