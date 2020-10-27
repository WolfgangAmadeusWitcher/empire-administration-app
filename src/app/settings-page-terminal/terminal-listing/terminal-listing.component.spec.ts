import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalListingComponent } from './terminal-listing.component';

describe('TerminalListingComponent', () => {
  let component: TerminalListingComponent;
  let fixture: ComponentFixture<TerminalListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
