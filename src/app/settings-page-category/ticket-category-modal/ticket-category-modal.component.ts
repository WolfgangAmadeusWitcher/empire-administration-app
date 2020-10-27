import { TicketCategory } from './../../models/ticket-category.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-category-modal',
  templateUrl: './ticket-category-modal.component.html',
  styleUrls: ['./ticket-category-modal.component.css'],
})
export class TicketCategoryModalComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}
  editTicketCategoryForm: FormGroup;
  @Input() selectedTicketCategory: TicketCategory;
  @Output() editClicked = new EventEmitter<TicketCategory>();

  public openTicketCategoryModal(
    editTicketCategoryModal: FormGroup,
    ticketCategory: TicketCategory
  ): void {

    this.modalService.open(editTicketCategoryModal, {
      centered: true,
      backdrop: 'static',
    });

    this.editTicketCategoryForm.patchValue({
      id: ticketCategory.id,
      name: ticketCategory.name,
      description: ticketCategory.description,
      firstTicketNumber: ticketCategory.firstTicketNumber,
      lastTicketNumber: ticketCategory.lastTicketNumber,
      priorityCoefficient: ticketCategory.priorityCoefficient,
    });
  }
  ngOnInit(): void {
    this.clearModal();
  }

  onSubmit(): void {
    this.editClicked.emit(this.editTicketCategoryForm.value);
    this.modalService.dismissAll();
  }

  private clearModal(): void {
    this.editTicketCategoryForm = this.formBuilder.group(
      TicketCategory.getDefaultTicketCategorySettings()
    );
  }
}
