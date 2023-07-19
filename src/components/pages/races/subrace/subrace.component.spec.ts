import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubraceComponent } from './subrace.component';

describe('SubraceComponent', () => {
  let component: SubraceComponent;
  let fixture: ComponentFixture<SubraceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubraceComponent]
    });
    fixture = TestBed.createComponent(SubraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
