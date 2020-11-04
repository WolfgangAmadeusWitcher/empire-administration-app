import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalEditModalComponent } from './terminal-edit-modal.component';

describe('TerminalEditModalComponent', () => {
  let component: TerminalEditModalComponent;
  let fixture: ComponentFixture<TerminalEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
