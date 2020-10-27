import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TicketCategory } from './../../models/ticket-category.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-category-listing',
  templateUrl: './ticket-category-listing.component.html',
  styleUrls: ['./ticket-category-listing.component.css'],
})
export class TicketCategoryListingComponent implements OnInit {
  editTicketCategoryForm: FormGroup;
  @Input() ticketCategories: TicketCategory[];
  @Output() recordDeleted = new EventEmitter<TicketCategory>();
  @Output() editClicked = new EventEmitter<TicketCategory>();
  selectedTicketCategory: TicketCategory;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.clearModal();
  }

  private clearModal(): void {
    this.editTicketCategoryForm = this.formBuilder.group(
      TicketCategory.getDefaultTicketCategorySettings()
    );
  }

  getDefaultTicketCategory(): TicketCategory {
    return TicketCategory.getDefaultTicketCategorySettings();
  }

  public delete(data: TicketCategory): void {
    this.recordDeleted.emit(data);
    if (this.selectedTicketCategory.id === data.id) {
      this.selectedTicketCategory = undefined;
    }
  }

  public edit(data: TicketCategory): void {
    this.editClicked.emit(Object.assign({}, data));
  }

  onSubmit(): void {
    this.editClicked.emit(this.editTicketCategoryForm.value);
    this.modalService.dismissAll();
  }

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

  onRowClick(ticketCategory: TicketCategory): void {
    if (this.selectedTicketCategory === undefined) {
      this.selectedTicketCategory = ticketCategory;
      this.selectedTicketCategory.isSelected = true;
    } else if (this.selectedTicketCategory.id === ticketCategory.id) {
      this.selectedTicketCategory.isSelected = false;
      this.selectedTicketCategory = undefined;
    } else {
      this.selectedTicketCategory.isSelected = false;
      ticketCategory.isSelected = true;
      this.selectedTicketCategory = ticketCategory;
    }
  }
}
