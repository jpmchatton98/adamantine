import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStoreComponent } from './general-store.component';

describe('GeneralStoreComponent', () => {
  let component: GeneralStoreComponent;
  let fixture: ComponentFixture<GeneralStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralStoreComponent]
    });
    fixture = TestBed.createComponent(GeneralStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
