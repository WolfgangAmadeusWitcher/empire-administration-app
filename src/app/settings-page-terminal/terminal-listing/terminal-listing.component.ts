import { TerminalSignage } from './../../models/terminal-signage.model';
import { TerminalCategory } from './../../models/terminal-category.model';
import { Signage } from './../../models/signage.model';
import { TicketCategory } from './../../models/ticket-category.model';
import { Terminal } from './../../models/terminal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TerminalService } from 'src/app/services/terminal.service';
import { TerminalEditModalComponent } from '../Modals/terminal-edit-modal/terminal-edit-modal.component';

@Component({
  selector: 'app-terminal-listing',
  templateUrl: './terminal-listing.component.html',
  styleUrls: ['./terminal-listing.component.css'],
})
export class TerminalListingComponent{
  @Input() terminals: Terminal[];
  @Output() recordDeleted = new EventEmitter<Terminal>();
  @Output() editClicked = new EventEmitter<Terminal>();
  selectedTerminal: Terminal;
  selectedTerminalId: number;

  constructor(private modalService: NgbModal, private terminalBindingService: TerminalService) {}

  getDefaultTerminalSettings(): Terminal {
    return Terminal.getDefaultTerminal();
  }

  public delete(data: Terminal): void {
    this.recordDeleted.emit(data);
    if (this.selectedTerminal.id === data.id) {
      this.selectedTerminal = undefined;
    }
  }

  public openTerminalModal(terminal: Terminal, $event: Event): void {
    const modalRef = this.modalService.open(TerminalEditModalComponent, {
      centered: true,
      backdrop: 'static',
    });
    this.onRowClick(terminal);
    modalRef.componentInstance.selectedTerminal = terminal;
    modalRef.componentInstance.formSubmitted = this.editClicked;
    modalRef.componentInstance.openTerminalModal();
    $event.stopPropagation();
  }

  addCategoryToTerminal(addedTicketCategory: TicketCategory): void {
    const createdTerminalCategory = {
      terminalId: this.selectedTerminal.id,
      ticketCategoryId: addedTicketCategory.id,
    };
    this.terminalBindingService
      .createTerminalCategory(createdTerminalCategory)
      .subscribe((terminalCategoryResponse) =>
        this.selectedTerminal.terminalCategories.push(terminalCategoryResponse)
      );
  }

  removeCategoryFromTerminal(terminalCategory: TerminalCategory): void {
    this.terminalBindingService
      .deleteTerminalCategory(terminalCategory)
      .subscribe((terminalCategoryResponse) =>
        this.removeCategoryFromBindListing(terminalCategoryResponse)
      );
  }

  removeCategoryFromBindListing(terminalCategory: TerminalCategory): void {
    const deleteIndex = this.selectedTerminal.terminalCategories.findIndex(
      (trmCat) => trmCat.ticketCategoryId === terminalCategory.ticketCategoryId
    );
    this.selectedTerminal.terminalCategories.splice(deleteIndex, 1);
  }

  addSignageToTerminal(addedSignage: Signage): void {
    const createdTerminalSignage = {
      terminalId: this.selectedTerminal.id,
      signageId: addedSignage.id,
    };
    this.terminalBindingService
      .createTerminalSignage(createdTerminalSignage)
      .subscribe((terminalSignageResponse) =>
        this.selectedTerminal.terminalSignages.push(terminalSignageResponse)
      );
  }

  removeSignageFromTerminal(terminalSignage: TerminalSignage): void {
    this.terminalBindingService
      .deleteTerminalSignage(terminalSignage)
      .subscribe((terminalSignageResponse) =>
        this.removeSignageFromBindListing(terminalSignageResponse)
      );
  }

  removeSignageFromBindListing(terminalSignage: TerminalSignage): void {
    const deleteIndex = this.selectedTerminal.terminalSignages.findIndex(
      (trmSign) => trmSign.signageId === terminalSignage.signageId
    );
    this.selectedTerminal.terminalSignages.splice(deleteIndex, 1);
  }

  onRowClick(terminal: Terminal): void {
    this.selectedTerminal = terminal;
    if (this.selectedTerminalId === undefined) {
      terminal.isSelected = true;
      this.selectedTerminalId = terminal.id;
      return;
    }
    const selectedTerminal = this.terminals[this.terminals.findIndex(t => t.id === this.selectedTerminalId)];
    selectedTerminal.isSelected = false;
    if (this.selectedTerminalId === terminal.id) {
      this.selectedTerminalId = undefined;
    } else {
      terminal.isSelected = true;
      this.selectedTerminalId = terminal.id;
    }
  }
}
