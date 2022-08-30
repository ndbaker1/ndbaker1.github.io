import { themes } from '../theme.service';
import { Storage } from '../persistentStorage.service';
import type { Command } from '../command.service';
import { showThemePickerStore } from '../globals.service';


type PredefinedCommand =
  | 'manageTheme'
  | 'setVariable'
  | 'logVariables'
  | 'clearVariables'
  | 'wasm';

export const Commands: Record<PredefinedCommand, Command> = {
  manageTheme: ([, theme]) => {
    if (theme) {
      themes.find((t) => t.name == theme)?.setCurrent();
      showThemePickerStore.set(false);
    } else {
      showThemePickerStore.set(true);
    }
  },

  setVariable: ([, key, value]) => {
    Storage.set(key, value);
  },

  logVariables: () => {
    console.log(Storage.getAll());
  },

  clearVariables: () => {
    Storage.clear();
  },

  wasm: async ([, wasmURL, funcName, ...funcArgs]) => {
    try {
      const wasmBin = await fetch(encodeURI(wasmURL));
      const buffer = await wasmBin.arrayBuffer();
      const { instance } = await WebAssembly.instantiate(buffer, {
        env: {
          memoryBase: 0,
          tableBase: 0,
          memory: new WebAssembly.Memory({
            initial: 256,
          }),
          table: new WebAssembly.Table({
            initial: 0,
            element: 'anyfunc',
          }),
        },
      });
      const func: any = instance.exports[funcName];
      alert(func(funcArgs[0], funcArgs[1]));
    } catch (e) {
      console.error('wasm error:', e);
    }
  },
};

// https://raw.githubusercontent.com/mdn/webassembly-examples/master/understanding-text-format/add.wasm
