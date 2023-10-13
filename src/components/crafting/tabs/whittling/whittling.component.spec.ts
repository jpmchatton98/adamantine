import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhittlingComponent } from './whittling.component';

describe('WhittlingComponent', () => {
  let component: WhittlingComponent;
  let fixture: ComponentFixture<WhittlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhittlingComponent]
    });
    fixture = TestBed.createComponent(WhittlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
