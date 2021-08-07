import { Storage } from "./persistentStorage.service"

type ColorVariables =
  | 'bg-color'
  | 'bg-gradient1'
  | 'bg-gradient2'
  | 'text-color'
  | 'text-color-hover'
  | 'button-text-color'
  | 'button-bg-color'
  | 'button-bg-color-hover'

export class Theme {
  constructor(public name: string, public colors: Record<ColorVariables, string>) { }
  setCurrent(): void {
    Object.entries(this.colors).forEach(([name, value]) => {
      document.documentElement.style.setProperty('--' + name, value)
    })
    Storage.set('theme', this.name)
  }

  static refresh(): void {
    (themes.find(t => t.name == Storage.get('theme')) || themes[0]).setCurrent()
  }
}

export const themes = [
  new Theme('horizon', {
    'bg-color': '#312F2F',
    'bg-gradient1': '#312F2F',
    'bg-gradient2': '#22181C',
    'text-color': '#F6E8EA',
    'text-color-hover': '#EF626C',
    "button-text-color": "white",
    "button-bg-color": '#EF626C',
    "button-bg-color-hover": '#EF233C',
  }),
  new Theme('dark', {
    'bg-color': '#2B2D42',
    'bg-gradient1': '#2B2D42',
    'bg-gradient2': '#1B1D32',
    'text-color': '#8D99AE',
    'text-color-hover': '#D90429',
    "button-text-color": "white",
    "button-bg-color": '#EF233C',
    "button-bg-color-hover": '#D90429',
  }),
  new Theme('beige-purple', {
    'bg-color': '#EFF8E2',
    'bg-gradient1': '#EFF8E2',
    'bg-gradient2': '#CECFC7',
    'text-color': '#23022E',
    'text-color-hover': '#573280',
    "button-text-color": "#EFF8E2",
    "button-bg-color": '#573280',
    "button-bg-color-hover": '#23022E',
  }),
]