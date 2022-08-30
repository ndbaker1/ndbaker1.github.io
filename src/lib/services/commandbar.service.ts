import { clickOutside } from '$lib/actions/outsideClick.action';
import { writable } from 'svelte/store';
import type { CommandService } from './command.service';
import { KeyMaps } from './keymap.service';

export class CommandBarService {
  constructor(
    private starters: string[],
    private commandService: CommandService,
    private textValue: { get: () => string; set: (s: string) => void }
  ) { }

  showHelp = writable(false);

  commandList = [
    {
      value: 'theme [ name ]',
      info: ['alias: t', 'change to another theme by menu, or by <name>'],
    },
    { value: ':github', info: ['open github in a new tab'] },
    { value: ':resume', info: ['open resume in a new tab'] },
    {
      value: ':set KEY VALUE',
      info: ['set a value that can be used in other commands using $KEY'],
    },
  ];

  bar = {
    show: writable(false),
    open: (): void =>
      this.bar.show.update((isShowing) => {
        if (!isShowing) this.textValue.set('');
        return true;
      }),
    close: (): void => this.bar.show.set(false),
  };

  outsideClickClose = clickOutside(this.bar.close);

  keyHandlers = {
    keyup: (event: KeyboardEvent): void => {
      if (event.key === 'Enter') {
        this.commandService.execute(this.textValue.get());
        this.bar.close();
      } else if (!this.starters.some((c) => this.textValue.get().startsWith(c))) {
        this.bar.close();
      }
    },
  };

  init(): void {
    KeyMaps.register(this.starters, this.bar.open);
    // KeyMaps.register(['Escape'], this.bar.close);
  }
}
