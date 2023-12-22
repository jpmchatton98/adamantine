import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreLanguagesComponent } from './lore-languages.component';

describe('LoreLanguagesComponent', () => {
  let component: LoreLanguagesComponent;
  let fixture: ComponentFixture<LoreLanguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoreLanguagesComponent]
    });
    fixture = TestBed.createComponent(LoreLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
