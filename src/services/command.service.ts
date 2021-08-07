export class CommandService {
  commandSet = new Map<RegExp, (args: string[]) => void>()

  preparser = (s: string): string => s

  register(command: RegExp, effect: (args: string[]) => void): void {
    this.commandSet.set(command, effect)
  }

  execute(text: string): void {
    const [command, ...args] = this.preparser(text).split(' ')
    for (const [key, func] of this.commandSet) {
      if (key.test(command)) {
        func(args)
        break
      }
    }
  }
}
