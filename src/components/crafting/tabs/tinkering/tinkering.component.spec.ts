import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinkeringComponent } from './tinkering.component';

describe('TinkeringComponent', () => {
  let component: TinkeringComponent;
  let fixture: ComponentFixture<TinkeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TinkeringComponent]
    });
    fixture = TestBed.createComponent(TinkeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
