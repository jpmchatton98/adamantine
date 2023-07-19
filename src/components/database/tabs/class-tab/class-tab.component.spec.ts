import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTabComponent } from './class-tab.component';

describe('ClassTabComponent', () => {
  let component: ClassTabComponent;
  let fixture: ComponentFixture<ClassTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassTabComponent]
    });
    fixture = TestBed.createComponent(ClassTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
