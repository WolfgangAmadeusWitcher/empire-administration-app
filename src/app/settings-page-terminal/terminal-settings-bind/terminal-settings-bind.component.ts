import { TerminalSettingsComponent } from './../terminal-settings/terminal-settings.component';
import { TerminalCategoryBindModalComponent } from './../Modals/terminal-category-bind-modal/terminal-category-bind-modal.component';
import { Signage } from './../../models/signage.model';
import { TerminalSignage } from './../../models/terminal-signage.model';
import { TerminalCategory } from './../../models/terminal-category.model';
import { TicketCategory } from './../../models/ticket-category.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Terminal } from './../../models/terminal.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TerminalSignageBindModalComponent } from '../Modals/terminal-signage-bind-modal/terminal-signage-bind-modal.component';

@Component({
  selector: 'app-terminal-settings-bind',
  templateUrl: './terminal-settings-bind.component.html',
  styleUrls: ['./terminal-settings-bind.component.css'],
})
export class TerminalSettingsBindComponent {
  @Input() highlightedTerminal: Terminal;
  @Output() categoryAdded = new EventEmitter<TicketCategory>();
  @Output() categoryDeleted = new EventEmitter<TerminalCategory>();
  @Output() signageAdded = new EventEmitter<Signage>();
  @Output() signageDeleted = new EventEmitter<TerminalSignage>();
  selectedDisplayCategory: string;

  selectOptions: string[] = ['Categories', 'Signages'];

  constructor(
    private modalService: NgbModal
  ) {}

  getTicketCategoriesByIds(
    terminalCategories: TerminalCategory[]
  ): TicketCategory[] {
    return TerminalSettingsComponent.ticketCategories.filter((category) =>
      terminalCategories.some((tr) => tr.ticketCategoryId === category.id)
    );
  }

  getSignagesByIds(terminalSignages: TerminalSignage[]): Signage[] {
    return TerminalSettingsComponent.signages.filter((signage) =>
      terminalSignages.some((tr) => tr.signageId === signage.id)
    );
  }

  getTicketCategoriesByNotContainingIds(
    terminalCategories: TerminalCategory[]
  ): TicketCategory[] {
    return TerminalSettingsComponent.ticketCategories.filter(
      (category) =>
        !terminalCategories.some((tr) => tr.ticketCategoryId === category.id)
    );
  }

  getSignagesByNotContainingIds(
    terminalSignages: TerminalSignage[]
  ): Signage[] {
    return TerminalSettingsComponent.signages.filter(
      (signage) =>
        !terminalSignages.some((trSign) => trSign.signageId === signage.id)
    );
  }

  onSelect(selected: string): void {
    this.selectedDisplayCategory = selected;
  }

  removeCategoryFromTerminal(
    ticketCategoryId: number,
    terminalId: number
  ): void {
    this.categoryDeleted.emit({ terminalId, ticketCategoryId });
  }
  removeSignageFromTerminal(signageId: number, terminalId: number): void {
    this.signageDeleted.emit({ terminalId, signageId });
  }

  openTerminalCategoryBindModal(terminal: Terminal): void {
    const modalRef = this.modalService.open(
      TerminalCategoryBindModalComponent,
      {
        centered: true,
        backdrop: 'static',
      }
    );

    modalRef.componentInstance.terminal = terminal;
    modalRef.componentInstance.ticketCategories = this.getTicketCategoriesByNotContainingIds(
      terminal.terminalCategories
    );
    modalRef.componentInstance.formSubmitted.subscribe((tid) => {
      this.onCategoryInsertSubmit(tid.id);
    });
    modalRef.componentInstance.openTerminalModal();
  }

  openTerminalSignageBindModal(terminal: Terminal): void{
    const modalRef = this.modalService.open(
      TerminalSignageBindModalComponent,
      {
        centered: true,
        backdrop: 'static',
      }
    );

    modalRef.componentInstance.terminal = terminal;
    modalRef.componentInstance.signages = this.getSignagesByNotContainingIds(terminal.terminalSignages);
    modalRef.componentInstance.formSubmitted.subscribe((sid) => {
      this.onSignageInsertSubmit(sid.id);
    });
    modalRef.componentInstance.openTerminalModal();
  }

  onCategoryInsertSubmit(ticketCategoryId: number): void {
    const selectedCategory = TerminalSettingsComponent.ticketCategories.find(
      (tcktCat) => Number(tcktCat.id) === Number(ticketCategoryId)
    );
    this.categoryAdded.emit(selectedCategory);
    this.modalService.dismissAll();
  }

  onSignageInsertSubmit(signageId: number): void {
    const selectedSignage = TerminalSettingsComponent.signages.find(
      (sign) => Number(sign.id) === Number(signageId)
    );
    this.signageAdded.emit(selectedSignage);
    this.modalService.dismissAll();
  }
}
