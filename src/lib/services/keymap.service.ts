export class KeyMaps {

  static init(): void {
    // addEventListener('keypress', event => event.key == ':' ? alert() : '')
  }

  static register(keys: string[], callback: () => void): void {
    keys.forEach(key => addEventListener('keydown', event => {
      if (event.key == key) callback()
    }))
  }
}