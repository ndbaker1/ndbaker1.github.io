export class KeyMaps {

  static init(): void {
    // addEventListener('keypress', event => event.key == ':' ? alert() : '')
  }

  static register(key: string, callback: () => void): void {
    addEventListener('keypress', event => {
      if (event.key == key) callback()
    })
  }
}