import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldModalComponent } from './dynamic-field-modal.component';

describe('DynamicFieldModalComponent', () => {
  let component: DynamicFieldModalComponent;
  let fixture: ComponentFixture<DynamicFieldModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFieldModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFieldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
