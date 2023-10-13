import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchemyComponent } from './alchemy.component';

describe('AlchemyComponent', () => {
  let component: AlchemyComponent;
  let fixture: ComponentFixture<AlchemyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlchemyComponent]
    });
    fixture = TestBed.createComponent(AlchemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
