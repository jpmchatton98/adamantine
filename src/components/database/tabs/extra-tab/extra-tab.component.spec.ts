import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraTabComponent } from './extra-tab.component';

describe('ExtraTabComponent', () => {
  let component: ExtraTabComponent;
  let fixture: ComponentFixture<ExtraTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraTabComponent]
    });
    fixture = TestBed.createComponent(ExtraTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
