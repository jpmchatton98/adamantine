import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSubclassesComponent } from './class-subclasses.component';

describe('ClassSubclassesComponent', () => {
  let component: ClassSubclassesComponent;
  let fixture: ComponentFixture<ClassSubclassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassSubclassesComponent]
    });
    fixture = TestBed.createComponent(ClassSubclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
