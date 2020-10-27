import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageEditorComponent } from './settings-page-editor.component';

describe('SettingsPageEditorComponent', () => {
  let component: SettingsPageEditorComponent;
  let fixture: ComponentFixture<SettingsPageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
