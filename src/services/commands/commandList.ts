import { showNavigatorStore, showThemePickerStore } from "../globals.service"
import { getSections } from "../section-navigation.service"
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
  openNavigator: (): void => {
    showNavigatorStore.set(true)
  },
  navigate: (args: string[]): void => {
    getSections()[+args[0] - 1]?.scrollIntoView({ behavior: 'smooth' })
  }
}