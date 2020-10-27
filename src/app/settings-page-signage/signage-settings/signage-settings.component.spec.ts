import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignageSettingsComponent } from './signage-settings.component';

describe('SignageSettingsComponent', () => {
  let component: SignageSettingsComponent;
  let fixture: ComponentFixture<SignageSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignageSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
