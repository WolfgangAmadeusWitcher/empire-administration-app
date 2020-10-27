import { TerminalCategory } from './terminal-category.model';
import { TerminalSignage } from './terminal-signage.model';

export class Terminal{
  id: number;
  alias: string;
  status: number;
  breakComment: string;
  terminalCategories: TerminalCategory[];
  terminalSignages: TerminalSignage[];
}

export enum Status {
  Active = 1,
  Break,
  Idle,
  Offline
}
