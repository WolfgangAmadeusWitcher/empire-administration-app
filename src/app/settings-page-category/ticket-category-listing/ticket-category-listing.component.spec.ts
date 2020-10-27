import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCategoryListingComponent } from './ticket-category-listing.component';

describe('TicketCategoryListingComponent', () => {
  let component: TicketCategoryListingComponent;
  let fixture: ComponentFixture<TicketCategoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCategoryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCategoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
