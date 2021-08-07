import { showThemePickerStore } from "../globals.service"
import { themes } from "../theme.service"

export const Commands = {
  manageTheme: (args: string[]): void => {
    if (args[0]) themes.find((t) => t.name == args[0]).setCurrent()
    else showThemePickerStore.set(true)
  }
}