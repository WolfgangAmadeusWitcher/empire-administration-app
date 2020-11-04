import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalCategoryBindModalComponent } from './terminal-category-bind-modal.component';

describe('TerminalCategoryBindModalComponent', () => {
  let component: TerminalCategoryBindModalComponent;
  let fixture: ComponentFixture<TerminalCategoryBindModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalCategoryBindModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalCategoryBindModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
