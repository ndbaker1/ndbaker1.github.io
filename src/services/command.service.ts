import { Storage } from "./persistentStorage.service"

export type CommandPattern = RegExp
export type Command = (args: string[]) => void

export class CommandService {
  private commandSet = new Map<CommandPattern, Command>()

  register(pattern: CommandPattern, command: Command): void {
    this.commandSet.set(pattern, command)
  }

  execute(text: string): void {
    const { prefix, args } = Parser.parse(text)
    const commandKey = prefix + args[0]

    for (const [pattern, command] of this.commandSet) {
      if (pattern.test(commandKey)) {
        command(args)
        break
      }
    }
  }
}

/**
 * @example
 * const { prefix, args } = Parser.parse(":test-a-command arg1 arg2 --flag")
 * // prefix  - should be ':'
 * // args    - should be ['test-a-command', 'arg1', 'arg2', '--flag']
 */
class Parser {
  static parse = (text: string): { prefix: string, args: string[] } => {
    let args: string[]
    args = Parser.parseArgs(text)
    args = Parser.substituteArgs(args)
    const prefix = Parser.getPrefix(args[0])
    args = Parser.removePrefix(args)
    return { prefix, args }
  }

  private static parseArgs = (text: string) => text.split(' ')

  private static getPrefix = (command: string) => command[0]

  private static removePrefix = ([first, ...rest]: string[]) => [first.substr(1), ...rest]

  private static substituteArgs = ([name, ...args]: string[]) => {
    const subArgs = args.map(arg => arg.startsWith('$')
      ? Storage.get(arg.substr(1))
      : arg
    )
    return [name, ...subArgs]
  }
}