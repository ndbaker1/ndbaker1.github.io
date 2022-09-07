export enum CommandStatus {
  Executed,
  SubCommands,
  Invalid,
}

type Command = {
  path: string[];
  func: () => void;
};

type CommandLeaf = CommandMap | Command;

class CommandMap extends Map<string, CommandLeaf> {}

export class CommandPaletteService {
  public commands = new CommandMap();

  public registerCommand(command: Command): void {
    const path = [...command.path];
    const last = path.pop();

    let map: CommandMap = this.commands;
    for (const pathKey of path) {
      const next = map.get(pathKey) ?? new CommandMap();
      if (next instanceof CommandMap) {
        map.set(pathKey, next);
        map = next;
      } else {
        throw Error('todo');
      }
    }

    map.set(last, command);
  }

  public search = (path: string[]): string[] => {
    const leaf = this.traverse(path);
    if (!leaf) {
      return [];
    } else if (leaf instanceof CommandMap) {
      return [...leaf]
        .map(([key, _]) => key)
        .filter((key) => key.startsWith(path[path.length - 1]));
    } else {
      return [leaf.path[leaf.path.length - 1]];
    }
  };

  public execute = (path: string[]): CommandStatus => {
    const leaf = this.traverse(path);
    if (!leaf) {
      return CommandStatus.Invalid;
    } else if (leaf instanceof CommandMap) {
      return CommandStatus.SubCommands;
    } else {
      leaf.func();
      return CommandStatus.Executed;
    }
  };

  private traverse = (path: string[]): CommandLeaf | null => {
    let mapping = this.commands;

    for (const key of path) {
      if (mapping instanceof CommandMap && mapping.has(key)) {
        const next = mapping.get(key);
        if (next instanceof CommandMap) {
          mapping = next;
        } else {
          return next;
        }
      }
    }

    return mapping;
  };
}
