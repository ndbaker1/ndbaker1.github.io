export class KeyMaps {
  static Mappings: ((_: any) => void)[] = [];

  static register(keys: string[], callback: () => void): void {
    keys.forEach((key) => {
      const handler = (event) => {
        if (event.key == key) {
          event.preventDefault();
          callback();
        }
      };

      addEventListener('keydown', handler, true);
      this.Mappings.push(handler);
    });
  }

  static cleanup(): void {
    this.Mappings.forEach((mapping) => removeEventListener('keydown', mapping, true));
  }
}
