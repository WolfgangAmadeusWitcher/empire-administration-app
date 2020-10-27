import { TerminalCategory } from './terminal-category.model';

export class TicketCategory {
  id: number;
  name: string;
  description: string;
  firstTicketNumber: number;
  lastTicketNumber: number;
  priorityCoefficient: number;
  terminalCategories: TerminalCategory[];
  isSelected = false;

  static getDefaultTicketCategorySettings(): TicketCategory {
    return {
      id: undefined,
      name: '',
      description: '',
      firstTicketNumber: undefined,
      lastTicketNumber: undefined,
      priorityCoefficient: undefined,
      terminalCategories: undefined,
      isSelected: undefined,
    };
  }
}
