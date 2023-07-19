import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclassComponent } from './subclass.component';

describe('SubclassComponent', () => {
  let component: SubclassComponent;
  let fixture: ComponentFixture<SubclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubclassComponent]
    });
    fixture = TestBed.createComponent(SubclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
