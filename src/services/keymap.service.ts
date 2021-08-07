export class KeyMaps {

  static init(): void {
    // addEventListener('keypress', event => event.key == ':' ? alert() : '')
  }

  static register(key: string, callback: () => void): void {
    addEventListener('keydown', event => {
      if (event.key == key) callback()
    })
  }
}