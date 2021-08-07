export class CommandService {
  commandSet = new Map<string, (args: string[]) => void>()

  preparser = (s: string): string => s.substring(1)

  registerCommand(command: string, effect: (args: string[]) => void): void {
    this.commandSet.set(command, effect)
  }

  execute(text: string): void {
    const [command, ...args] = this.preparser(text).split(' ')
    const commandFunc = this.commandSet.get(command)
    if (commandFunc) commandFunc(args)
  }
}
