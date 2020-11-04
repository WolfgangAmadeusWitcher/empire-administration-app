import { TerminalCategory } from './terminal-category.model';
import { TerminalSignage } from './terminal-signage.model';

export class Terminal{
  id: number;
  alias: string;
  status: number;
  breakComment: string;
  terminalCategories: TerminalCategory[];
  terminalSignages: TerminalSignage[];
  isSelected: boolean;

  static getDefaultTerminal(): Terminal {
    return {
      id: undefined,
      alias: '',
      status: undefined,
      breakComment: '',
      terminalSignages: undefined,
      terminalCategories: undefined,
      isSelected: undefined,
    };
  }
}

export enum Status {
  Active = 1,
  Break,
  Idle,
  Offline
}
