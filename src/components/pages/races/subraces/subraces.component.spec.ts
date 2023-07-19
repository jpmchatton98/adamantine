import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubracesComponent } from './subraces.component';

describe('SubracesComponent', () => {
  let component: SubracesComponent;
  let fixture: ComponentFixture<SubracesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubracesComponent]
    });
    fixture = TestBed.createComponent(SubracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
