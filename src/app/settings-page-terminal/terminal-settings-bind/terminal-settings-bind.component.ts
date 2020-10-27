import { SignageService } from '../../services/signage.service';
import { TicketCategoryService } from '../../services/ticket-category.service';
import { Signage } from './../../models/signage.model';
import { TerminalSignage } from './../../models/terminal-signage.model';
import { TerminalCategory } from './../../models/terminal-category.model';
import { TicketCategory } from './../../models/ticket-category.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Terminal } from './../../models/terminal.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terminal-settings-bind',
  templateUrl: './terminal-settings-bind.component.html',
  styleUrls: ['./terminal-settings-bind.component.css'],
})
export class TerminalSettingsBindComponent implements OnInit {
  @Input() highlightedTerminal: Terminal;
  @Output() categoryAdded = new EventEmitter<TicketCategory>();
  @Output() categoryDeleted = new EventEmitter<TerminalCategory>();
  @Output() signageAdded = new EventEmitter<Signage>();
  @Output() signageDeleted = new EventEmitter<TerminalSignage>();
  addTerminalBindForm: FormGroup;
  selectedDisplayCategory: string;
  ticketCategories: TicketCategory[] = [];
  signages: Signage[] = [];

  selectOptions: string[] = ['Categories', 'Signages'];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private ticketCategoryService: TicketCategoryService,
    private signageService: SignageService
  ) {
    this.signageService
    .getAll()
    .subscribe((signagesResponse) => {
      signagesResponse.map((signage) => this.signages.push(signage));
    });

    this.ticketCategoryService
      .getAll()
      .subscribe((categoriesResponse) => {
        categoriesResponse.map((category) => this.ticketCategories.push(category));
      });
  }

  getTicketCategoriesByIds(
    terminalCategories: TerminalCategory[]
  ): TicketCategory[] {
    return this.ticketCategories.filter((category) =>
      terminalCategories.some((tr) => tr.ticketCategoryId === category.id)
    );
  }

  getSignagesByIds(terminalSignages: TerminalSignage[]): Signage[] {
    return this.signages.filter((signage) =>
      terminalSignages.some((tr) => tr.signageId === signage.id)
    );
  }

  getTicketCategoriesByNotContainingIds(
    terminalCategories: TerminalCategory[]
  ): TicketCategory[] {
    return this.ticketCategories.filter(
      (category) =>
        !terminalCategories.some((tr) => tr.ticketCategoryId === category.id)
    );
  }

  getSignagesByNotContainingIds(
    terminalSignages: TerminalSignage[]
  ): Signage[] {
    return this.signages.filter(
      (signage) =>
        !terminalSignages.some((trSign) => trSign.signageId === signage.id)
    );
  }

  onSelect(selected: string): void {
    this.selectedDisplayCategory = selected;
  }

  removeCategoryFromTerminal(ticketCategoryId: number, terminalId: number): void {
    this.categoryDeleted.emit({ terminalId, ticketCategoryId });
  }
  removeSignageFromTerminal(signageId: number, terminalId: number): void {
    this.signageDeleted.emit({ terminalId, signageId });
  }

  openTerminalBindModal(editTerminalModal: FormGroup): void {
    this.modalService.open(editTerminalModal, {
      centered: true,
      backdrop: 'static',
    });
  }

  getDefaultCategory(): any {
    return {
      id: '',
    };
  }

  onCategoryInsertSubmit(): void {
    const categoryId: number = this.addTerminalBindForm.value.id;
    const selectedCategory = this.ticketCategories.find(
      (tcktCat) => tcktCat.id.toString() === categoryId.toString()
    );
    this.categoryAdded.emit(selectedCategory);
    this.modalService.dismissAll();
  }

  onSignageInsertSubmit(): void {

    const signageId: number = this.addTerminalBindForm.value.id;
    console.log(signageId);
    const selectedSignage = this.signages.find(
      (sign) => sign.id.toString() === signageId.toString()
    );
    console.log(selectedSignage);
    this.signageAdded.emit(selectedSignage);
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
    this.clearModal();
  }

  private clearModal(): void {
    this.addTerminalBindForm = this.formBuilder.group(
      this.getDefaultCategory()
    );
  }
}
