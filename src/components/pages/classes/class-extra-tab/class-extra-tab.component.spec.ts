import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassExtraTabComponent } from './class-extra-tab.component';

describe('ClassExtraTabComponent', () => {
  let component: ClassExtraTabComponent;
  let fixture: ComponentFixture<ClassExtraTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassExtraTabComponent]
    });
    fixture = TestBed.createComponent(ClassExtraTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
