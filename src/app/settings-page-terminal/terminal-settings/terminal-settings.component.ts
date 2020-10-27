import { TerminalService } from './../../services/terminal.service';
import { Component } from '@angular/core';
import { Terminal } from './../../models/terminal.model';

@Component({
  selector: 'app-terminal-settings',
  templateUrl: './terminal-settings.component.html',
  styleUrls: ['./terminal-settings.component.css'],
})
export class TerminalSettingsComponent {
  public terminals: Terminal[] = [];

  constructor(private terminalService: TerminalService) {
    this.terminalService.getAll().subscribe((terminals) => {
      terminals.map((terminal) => this.terminals.push(terminal));
    });
  }

  public createOrUpdateTerminal(terminal: Terminal): void {
    if (terminal.id !== undefined) {
      const updateIndex = this.terminals.findIndex(
        (tc) => tc.id === terminal.id
      );
      this.terminalService
        .update(terminal)
        .subscribe(
          (terminalRecord) => (this.terminals[updateIndex] = terminalRecord)
        );
    } else {
      this.terminalService
        .create(terminal)
        .subscribe((terminalRecord) => {
          this.terminals.push(terminalRecord);
        });
    }
  }

  deleteTerminal(terminal: Terminal): void {
    this.terminalService.remove(terminal);

    const deleteIndex = this.terminals.findIndex((tc) => tc.id === terminal.id);
    this.terminals.splice(deleteIndex, 1);
  }
}
