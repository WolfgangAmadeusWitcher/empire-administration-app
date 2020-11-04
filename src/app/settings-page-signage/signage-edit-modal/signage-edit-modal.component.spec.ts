import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignageEditModalComponent } from './signage-edit-modal.component';

describe('SignageEditModalComponent', () => {
  let component: SignageEditModalComponent;
  let fixture: ComponentFixture<SignageEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignageEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignageEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
