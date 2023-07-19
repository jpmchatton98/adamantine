import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclassDataComponent } from './subclass-data.component';

describe('SubclassDataComponent', () => {
  let component: SubclassDataComponent;
  let fixture: ComponentFixture<SubclassDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubclassDataComponent]
    });
    fixture = TestBed.createComponent(SubclassDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
