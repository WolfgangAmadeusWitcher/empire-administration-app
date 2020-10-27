import { TerminalSignage } from './terminal-signage.model';

export class Signage {
  id: number;
  alias: string;
  terminalSignages: TerminalSignage[];

  static getDefaultSignage(): Signage{
    return {
      id: undefined,
      alias: '',
      terminalSignages: undefined,
    };
  }
}
