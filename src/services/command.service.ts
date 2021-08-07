type CommandInfo = {
  op: (args: string[]) => void,
  parser: (s: string) => string[]
}

export class CommandService {
  commandSet = new Map<RegExp, CommandInfo>()

  preparser: CommandInfo['parser'] = (s) => s.split(' ')

  register(
    command: RegExp,
    effect: CommandInfo['op'],
    parser = this.preparser): void {
    this.commandSet.set(command, {
      op: effect,
      parser
    })
  }

  execute(text: string): void {
    const [command,] = this.preparser(text)
    for (const [key, cmd] of this.commandSet) {
      if (key.test(command)) {
        const [, ...args] = cmd.parser(text)
        cmd.op(args)
        break
      }
    }
  }
}
