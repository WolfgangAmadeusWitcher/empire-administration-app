import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalSignageBindModalComponent } from './terminal-signage-bind-modal.component';

describe('TerminalSignageBindModalComponent', () => {
  let component: TerminalSignageBindModalComponent;
  let fixture: ComponentFixture<TerminalSignageBindModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalSignageBindModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalSignageBindModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
