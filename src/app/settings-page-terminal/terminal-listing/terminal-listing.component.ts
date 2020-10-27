import { TerminalSignage } from './../../models/terminal-signage.model';
import { TerminalCategory } from './../../models/terminal-category.model';
import { Signage } from './../../models/signage.model';
import { TicketCategory } from './../../models/ticket-category.model';
import { Terminal } from './../../models/terminal.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TerminalService } from 'src/app/services/terminal.service';

@Component({
  selector: 'app-terminal-listing',
  templateUrl: './terminal-listing.component.html',
  styleUrls: ['./terminal-listing.component.css'],
})
export class TerminalListingComponent implements OnInit {
  editTerminalForm: FormGroup;
  @Input() terminals: Terminal[];
  @Output() recordDeleted = new EventEmitter<Terminal>();
  @Output() editClicked = new EventEmitter<Terminal>();
  selectedTerminal: Terminal;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private terminalBindingService: TerminalService
  ) {}

  ngOnInit(): void {
    this.clearModal();
  }

  private clearModal(): void {
    this.editTerminalForm = this.formBuilder.group(
      this.getDefaultTerminalSettings()
    );
  }

  getDefaultTerminalSettings(): Terminal {
    return {
      id: undefined,
      alias: '',
      status: undefined,
      breakComment: '',
      terminalSignages: undefined,
      terminalCategories: undefined,
    };
  }

  public delete(data: Terminal): void {
    this.recordDeleted.emit(data);
    if (this.selectedTerminal.id === data.id) {
      this.selectedTerminal = undefined;
    }
  }

  public openTerminalModal(
    editTerminalModal: FormGroup,
    terminal: Terminal
  ): void {
    this.modalService.open(editTerminalModal, {
      centered: true,
      backdrop: 'static',
    });

    this.editTerminalForm.patchValue({
      id: terminal.id,
      alias: terminal.alias,
      status: terminal.status,
      breakComment: terminal.breakComment,
      terminalSignages: terminal.terminalSignages,
      terminalCategories: terminal.terminalCategories,
    });
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

  onSubmit(): void {
    this.editClicked.emit(this.editTerminalForm.value);
    this.modalService.dismissAll();
  }

  onRowClick(terminal: Terminal, checkBox): void {
    this.clearPreviouslySelectedCheckBox();
    if (this.selectedTerminal?.id !== terminal.id) {
      this.selectedTerminal = terminal;
      checkBox.checked = true;
    } else {
      this.selectedTerminal = undefined;
    }
  }

  private clearPreviouslySelectedCheckBox(): void {
    if (this.selectedTerminal !== undefined) {
      const previousCheckBox = document.getElementById(
        this.selectedTerminal.id.toString()
      ) as HTMLInputElement;

      previousCheckBox.checked = false;
    }
  }
}
