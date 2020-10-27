import { TicketCategoryService } from './../../services/ticket-category.service';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { TicketCategory } from './../../models/ticket-category.model';

@Component({
  selector: 'app-ticket-category-form',
  templateUrl: './ticket-category-form.component.html',
  styleUrls: ['./ticket-category-form.component.css'],
})
export class TicketCategoryFormComponent {
  public ticketCategories: TicketCategory[] = [];

  @Output() ticketCategoryCreated = new EventEmitter<any>();
  @Input() ticketCategory: TicketCategory;

  constructor(private ticketCategoryService: TicketCategoryService) {
    this.ticketCategoryService.getAll().subscribe((ticketCategoryRecords) => {
      ticketCategoryRecords.map((ticketCategory) => this.ticketCategories.push(ticketCategory));
    });
  }

  public createOrUpdateTicketCategory(ticketCategory: TicketCategory): void {
    if (ticketCategory.id !== undefined) {
      const updateIndex = this.ticketCategories.findIndex(
        (tc) => tc.id === ticketCategory.id
      );
      this.ticketCategoryService
        .update(ticketCategory)
        .subscribe(
          (ticketCategoryRecord) => (this.ticketCategories[updateIndex] = ticketCategoryRecord)
        );
    } else {
      this.ticketCategoryService
        .create(ticketCategory)
        .subscribe((ticketCategoryRecord) => {
          this.ticketCategories.push(ticketCategoryRecord);
        });
    }
  }

  deleteTicketCategory(ticketCategory: TicketCategory): void {
    this.ticketCategoryService.remove(ticketCategory);

    const deleteIndex = this.ticketCategories.findIndex((tc) => tc.id === ticketCategory.id);
    this.ticketCategories.splice(deleteIndex, 1);
  }
}
