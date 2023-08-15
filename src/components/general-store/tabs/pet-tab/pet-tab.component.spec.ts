import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTabComponent } from './pet-tab.component';

describe('PetTabComponent', () => {
  let component: PetTabComponent;
  let fixture: ComponentFixture<PetTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetTabComponent],
    });
    fixture = TestBed.createComponent(PetTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
