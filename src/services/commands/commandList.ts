import { showNavigatorStore, showThemePickerStore } from "../globals.service"
import { getSections } from "../section-navigation.service"
import { themes } from "../theme.service"

import { Storage } from "../persistentStorage.service"
import type { Command } from "../command.service"

type PredefinedCommand =
  | 'manageTheme'
  | 'openNavigator'
  | 'navigate'
  | 'setVariable'
  | 'wasm'

export const Commands: Record<PredefinedCommand, Command> = {
  manageTheme: ([, theme]) => {
    if (theme) {
      themes.find((t) => t.name == theme)?.setCurrent()
      showThemePickerStore.set(false)
    } else {
      showThemePickerStore.set(true)
    }
  },

  openNavigator: () => {
    showNavigatorStore.set(true)
  },

  navigate: ([section]) => {
    getSections()[+section - 1]?.scrollIntoView({ behavior: 'smooth' })
    showNavigatorStore.set(false)
  },

  setVariable: ([, key, value]) => {
    Storage.set(key, value)
  },

  wasm: async ([, wasmURL, funcName, ...funcArgs]) => {
    try {
      const wasmBin = await fetch(encodeURI(wasmURL))
      const buffer = await wasmBin.arrayBuffer()
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
        }
      })
      const func: any = instance.exports[funcName]
      alert(func(funcArgs[0], funcArgs[1]))
    } catch (e) {
      console.error("wasm error:", e)
    }
  }
}

// https://raw.githubusercontent.com/mdn/webassembly-examples/master/understanding-text-format/add.wasm