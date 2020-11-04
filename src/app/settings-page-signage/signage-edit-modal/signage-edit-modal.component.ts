import { Signage } from './../../models/signage.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signage-edit-modal',
  templateUrl: './signage-edit-modal.component.html',
  styleUrls: ['./signage-edit-modal.component.css']
})
export class SignageEditModalComponent {

  editSignageForm: FormGroup;

  @Input() selectedSignage: Signage;
  @Output() formSubmitted = new EventEmitter<Signage>();

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { }

  public openSignageModal(): void {
    this.clearModal();
    this.editSignageForm.patchValue({
      id: this.selectedSignage.id,
      alias: this.selectedSignage.alias,
      terminalSignages: this.selectedSignage.terminalSignages,
      isSelected: this.selectedSignage.isSelected,
    });
  }

  private clearModal(): void {
    this.editSignageForm = this.formBuilder.group(Signage.getDefaultSignage());
  }

  onSubmit(): void {
    this.formSubmitted.emit(this.editSignageForm.value);
    this.activeModal.dismiss();
  }
}
