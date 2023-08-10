import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmToolsComponent } from './dm-tools.component';

describe('DmToolsComponent', () => {
  let component: DmToolsComponent;
  let fixture: ComponentFixture<DmToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmToolsComponent]
    });
    fixture = TestBed.createComponent(DmToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
