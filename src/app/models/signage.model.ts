import { TerminalSignage } from './terminal-signage.model';

export class Signage {
  id: number;
  alias: string;
  terminalSignages: TerminalSignage[];
  isSelected: boolean;

  static getDefaultSignage(): Signage {
    return {
      id: undefined,
      alias: '',
      terminalSignages: undefined,
      isSelected: undefined,
    };
  }
}
