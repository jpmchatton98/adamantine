import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationTabComponent } from './modification-tab.component';

describe('ModificationTabComponent', () => {
  let component: ModificationTabComponent;
  let fixture: ComponentFixture<ModificationTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationTabComponent]
    });
    fixture = TestBed.createComponent(ModificationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
