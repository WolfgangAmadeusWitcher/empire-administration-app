import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCategoryFormComponent } from './ticket-category-form.component';

describe('TicketCategoryFormComponent', () => {
  let component: TicketCategoryFormComponent;
  let fixture: ComponentFixture<TicketCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
