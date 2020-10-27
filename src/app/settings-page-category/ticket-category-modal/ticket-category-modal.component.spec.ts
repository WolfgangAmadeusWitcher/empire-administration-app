import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCategoryModalComponent } from './ticket-category-modal.component';

describe('TicketCategoryModalComponent', () => {
  let component: TicketCategoryModalComponent;
  let fixture: ComponentFixture<TicketCategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
