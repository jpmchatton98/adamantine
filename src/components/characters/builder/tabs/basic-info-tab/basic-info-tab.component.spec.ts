import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoTabComponent } from './basic-info-tab.component';

describe('BasicInfoTabComponent', () => {
  let component: BasicInfoTabComponent;
  let fixture: ComponentFixture<BasicInfoTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicInfoTabComponent]
    });
    fixture = TestBed.createComponent(BasicInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
