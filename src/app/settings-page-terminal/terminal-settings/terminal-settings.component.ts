import { SignageService } from './../../services/signage.service';
import { Signage } from './../../models/signage.model';
import { TicketCategoryService } from './../../services/ticket-category.service';
import { TicketCategory } from './../../models/ticket-category.model';
import { TerminalService } from './../../services/terminal.service';
import { Component } from '@angular/core';
import { Terminal } from './../../models/terminal.model';

@Component({
  selector: 'app-terminal-settings',
  templateUrl: './terminal-settings.component.html',
  styleUrls: ['./terminal-settings.component.css'],
})
export class TerminalSettingsComponent {
  public static terminals: Terminal[] = [];
  public static ticketCategories: TicketCategory[] = [];
  public static signages: Signage[] = [];

  constructor(
    private terminalService: TerminalService,
    private ticketCategoryService: TicketCategoryService,
    private signageService: SignageService
  ) {
    this.terminalService.getAll().subscribe((terminals) => {
      terminals.map((terminal) =>
        TerminalSettingsComponent.terminals.push(terminal)
      );
    });

    this.ticketCategoryService.getAll().subscribe((categoriesResponse) => {
      categoriesResponse.map((category) =>
        TerminalSettingsComponent.ticketCategories.push(category)
      );
    });

    this.signageService.getAll().subscribe((signagesResponse) => {
      signagesResponse.map((signage) => TerminalSettingsComponent.signages.push(signage));
    });
  }

  public createOrUpdateTerminal(terminal: Terminal): void {
    if (terminal.id !== undefined) {
      const updateIndex = TerminalSettingsComponent.terminals.findIndex(
        (tc) => tc.id === terminal.id
      );
      this.terminalService
        .update(terminal)
        .subscribe(
          (terminalRecord) =>
            (TerminalSettingsComponent.terminals[updateIndex] = terminalRecord)
        );
    } else {
      this.terminalService.create(terminal).subscribe((terminalRecord) => {
        TerminalSettingsComponent.terminals.push(terminalRecord);
      });
    }
  }

  deleteTerminal(terminal: Terminal): void {
    this.terminalService.remove(terminal);

    const deleteIndex = TerminalSettingsComponent.terminals.findIndex(
      (tc) => tc.id === terminal.id
    );
    TerminalSettingsComponent.terminals.splice(deleteIndex, 1);
  }
}
