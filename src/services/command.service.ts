export class CommandService {
  commandSet = new Map<string, (args: string[]) => void>()

  preparser = (s: string): string => s.substring(1)

  registerCommands(commands: string[], effect: (args: string[]) => void): void {
    commands.forEach(command => this.commandSet.set(command, effect))
  }

  execute(text: string): void {
    const [command, ...args] = this.preparser(text).split(' ')
    const commandFunc = this.commandSet.get(command)
    commandFunc && commandFunc(args)
  }
}
