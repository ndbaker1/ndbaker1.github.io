import { showThemePickerStore } from "../globals.service"
import { themes } from "../theme.service"

export const Commands = {
  manageTheme: (args: string[]): void => {
    if (args[0]) {
      themes.find((t) => t.name == args[0])?.setCurrent()
      showThemePickerStore.set(false)
    } else {
      showThemePickerStore.set(true)
    }
  },
  navigate: (args: string[]): void => {
    location.href = "#" + (args[0] || '')
  },
}