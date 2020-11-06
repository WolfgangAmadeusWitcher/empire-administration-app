import { Terminal } from './../../../models/terminal.model';
import { TicketCategory } from './../../../models/ticket-category.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terminal-category-bind-modal',
  templateUrl: './terminal-category-bind-modal.component.html',
  styleUrls: ['./terminal-category-bind-modal.component.css']
})
export class TerminalCategoryBindModalComponent {

  modalForm: FormGroup;

  @Input() ticketCategories: TicketCategory[];
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
