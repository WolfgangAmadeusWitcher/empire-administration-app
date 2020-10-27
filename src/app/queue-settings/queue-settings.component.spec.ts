import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueSettingsComponent } from './queue-settings.component';

describe('QueueSettingsComponent', () => {
  let component: QueueSettingsComponent;
  let fixture: ComponentFixture<QueueSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
