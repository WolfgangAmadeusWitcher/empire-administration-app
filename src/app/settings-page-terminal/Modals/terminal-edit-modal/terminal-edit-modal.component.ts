import { Terminal } from './../../../models/terminal.model';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terminal-edit-modal',
  templateUrl: './terminal-edit-modal.component.html',
  styleUrls: ['./terminal-edit-modal.component.css']
})
export class TerminalEditModalComponent {

  modalForm: FormGroup;

  @Input() selectedTerminal: Terminal;
  @Output() formSubmitted = new EventEmitter<Terminal>();

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { }

  public openTerminalModal(): void {
    this.clearModal();
    this.modalForm.patchValue({
      id: this.selectedTerminal.id,
      alias: this.selectedTerminal.alias,
      status: this.selectedTerminal.status,
      breakComment: this.selectedTerminal.breakComment,
      terminalSignages: this.selectedTerminal.terminalSignages,
      terminalCategories: this.selectedTerminal.terminalCategories,
      isSelected: this.selectedTerminal.isSelected,
    });
  }

  private clearModal(): void {
    this.modalForm = this.formBuilder.group(Terminal.getDefaultTerminal());
  }

  onSubmit(): void {
    this.formSubmitted.emit(this.modalForm.value);
    this.activeModal.dismiss();
  }
}
