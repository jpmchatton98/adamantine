import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTabComponent } from './animal-tab.component';

describe('AnimalTabComponent', () => {
  let component: AnimalTabComponent;
  let fixture: ComponentFixture<AnimalTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalTabComponent]
    });
    fixture = TestBed.createComponent(AnimalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
