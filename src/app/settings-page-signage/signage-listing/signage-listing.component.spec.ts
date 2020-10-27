import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignageListingComponent } from './signage-listing.component';

describe('SignageListingComponent', () => {
  let component: SignageListingComponent;
  let fixture: ComponentFixture<SignageListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignageListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignageListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
