import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodcarvingComponent } from './woodcarving.component';

describe('WoodcarvingComponent', () => {
  let component: WoodcarvingComponent;
  let fixture: ComponentFixture<WoodcarvingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoodcarvingComponent]
    });
    fixture = TestBed.createComponent(WoodcarvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
