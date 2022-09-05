import { clickOutside } from '$lib/actions/outsideClick.action';
import { writable, type Writable } from 'svelte/store';
import { KeyMaps } from './keymap.service';

type Command = {
  key: string,
  subcommands: Command[],
} | {
  key: string,
  func: () => void,
}

export class CommandPaletteService {
  private commands: Command[] = []
  public commandResults: Writable<string[]> = writable([])
  public searchText = ''

  public registerCommand(command: Command): void {
    this.commands.push(command);
  }

  public bar = {
    show: writable(false),
    open: (): void =>
      this.bar.show.update((isShowing) => {
        if (!isShowing) {
          this.searchText = '';
        }
        return true;
      }),
    close: (): void => this.bar.show.set(false),
  };

  public outsideClickClose = clickOutside(this.bar.close);

  public keyHandler = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      (this.commands.find(a => a.key === this.searchText) as { func: Function }).func()
      this.bar.close();
    }
    if (event.key === 'Escape') {
      this.bar.close()
    }
  };

  public init(): void {
    KeyMaps.register(['Escape'], () => {
      this.bar.open()
    });
  }
}

