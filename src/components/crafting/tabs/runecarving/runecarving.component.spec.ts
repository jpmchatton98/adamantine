import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunecarvingComponent } from './runecarving.component';

describe('RunecarvingComponent', () => {
  let component: RunecarvingComponent;
  let fixture: ComponentFixture<RunecarvingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunecarvingComponent]
    });
    fixture = TestBed.createComponent(RunecarvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
