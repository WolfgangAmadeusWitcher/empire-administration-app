import { Terminal } from './../../../models/terminal.model';
import { Signage } from './../../../models/signage.model';
import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terminal-signage-bind-modal',
  templateUrl: './terminal-signage-bind-modal.component.html',
  styleUrls: ['./terminal-signage-bind-modal.component.css']
})
export class TerminalSignageBindModalComponent {

  modalForm: FormGroup;

  @Input() signages: Signage[];
  @Input() terminal: Terminal;
  @Output() formSubmitted = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { }

  public openTerminalModal(): void {
    this.clearModal();
  }
  private clearModal(): void {
    this.modalForm = this.formBuilder.group({
        id: '',
      }
    );
  }

  onSubmit(): void {
    this.activeModal.dismiss();
    this.formSubmitted.emit(this.modalForm.value);
  }
}
