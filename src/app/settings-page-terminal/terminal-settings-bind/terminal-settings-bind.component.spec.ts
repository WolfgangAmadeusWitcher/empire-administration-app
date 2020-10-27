import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalSettingsBindComponent } from './terminal-settings-bind.component';

describe('TerminalSettingsBindComponent', () => {
  let component: TerminalSettingsBindComponent;
  let fixture: ComponentFixture<TerminalSettingsBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalSettingsBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalSettingsBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
