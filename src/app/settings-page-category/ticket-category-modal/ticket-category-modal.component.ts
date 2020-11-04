import { TicketCategory } from './../../models/ticket-category.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-category-modal',
  templateUrl: './ticket-category-modal.component.html',
  styleUrls: ['./ticket-category-modal.component.css'],
})
export class TicketCategoryModalComponent {

  @Input() selectedTicketCategory: TicketCategory;
  @Output() formSubmitted = new EventEmitter<TicketCategory>();

  editTicketCategoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {}

  public openTicketCategoryModal(): void {
    this.clearModal();
    this.editTicketCategoryForm.patchValue({
      id: this.selectedTicketCategory.id,
      name: this.selectedTicketCategory.name,
      description: this.selectedTicketCategory.description,
      firstTicketNumber: this.selectedTicketCategory.firstTicketNumber,
      lastTicketNumber: this.selectedTicketCategory.lastTicketNumber,
      priorityCoefficient: this.selectedTicketCategory.priorityCoefficient,
      isSelected: this.selectedTicketCategory.isSelected,
    });
  }

  onSubmit(): void {
    this.formSubmitted.emit(this.editTicketCategoryForm.value);
    this.activeModal.dismiss();
  }

  private clearModal(): void {
    this.editTicketCategoryForm = this.formBuilder.group(
      TicketCategory.getDefaultTicketCategorySettings()
    );
  }
}
