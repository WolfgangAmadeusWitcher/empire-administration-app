import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketCategory } from './../../models/ticket-category.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TicketCategoryModalComponent } from '../ticket-category-modal/ticket-category-modal.component';

@Component({
  selector: 'app-ticket-category-listing',
  templateUrl: './ticket-category-listing.component.html',
  styleUrls: ['./ticket-category-listing.component.css'],
})
export class TicketCategoryListingComponent {
  @Input() ticketCategories: TicketCategory[];
  @Output() recordDeleted = new EventEmitter<TicketCategory>();
  @Output() editClicked = new EventEmitter<TicketCategory>();
  selectedTicketCategoryId: number;

  constructor(private modalService: NgbModal) {}

  getDefaultTicketCategory(): TicketCategory {
    return TicketCategory.getDefaultTicketCategorySettings();
  }

  public delete(data: TicketCategory): void {
    this.recordDeleted.emit(data);
    if (this.selectedTicketCategoryId === data.id) {
      this.selectedTicketCategoryId = undefined;
    }
  }

  public openTicketCategoryModal(ticketCategory: TicketCategory, $event: Event): void {
    const modalRef = this.modalService.open(TicketCategoryModalComponent, {
      centered: true,
      backdrop: 'static',
    });
    this.onRowClick(ticketCategory);
    modalRef.componentInstance.selectedTicketCategory = ticketCategory;
    modalRef.componentInstance.formSubmitted = this.editClicked;
    modalRef.componentInstance.openTicketCategoryModal();
    $event.stopPropagation();
  }

  onRowClick(ticketCategory: TicketCategory): void {
    if (this.selectedTicketCategoryId === undefined) {
      ticketCategory.isSelected = true;
      this.selectedTicketCategoryId = ticketCategory.id;
      return;
    }
    const selectedTicketCategory = this.ticketCategories[this.ticketCategories.findIndex(tc => tc.id === this.selectedTicketCategoryId)];
    selectedTicketCategory.isSelected = false;
    if (this.selectedTicketCategoryId === ticketCategory.id) {
      this.selectedTicketCategoryId = undefined;
    } else {
      ticketCategory.isSelected = true;
      this.selectedTicketCategoryId = ticketCategory.id;
    }
  }
}
