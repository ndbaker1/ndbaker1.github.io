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
  }

  static refresh(): void {
    themes[0].setCurrent()
  }
}

export const themes = [
  new Theme('🍣 basic-dark', {
    'bg-color': '#2B2D42',
    'bg-gradient1': '#2B2D42',
    'bg-gradient2': '#1B1D32',
    'text-color': '#8D99AE',
    'text-color-hover': '#D90429',
    "button-text-color": "white",
    "button-bg-color": '#EF233C',
    "button-bg-color-hover": '#D90429',
  }),
  new Theme('basic-light', {
    'bg-color': '#EDF2F4',
    'bg-gradient1': '#EDF2F4',
    'bg-gradient2': '#EDF2F4',
    'text-color': '#8D99AE',
    'text-color-hover': '#D90429',
    "button-text-color": "white",
    "button-bg-color": '#D90429',
    "button-bg-color-hover": '#EF233C',
  }),
  new Theme('basic-light', {
    'bg-color': '#EDF2F4',
    'bg-gradient1': '#EDF2F4',
    'bg-gradient2': '#EDF2F4',
    'text-color': '#8D99AE',
    'text-color-hover': '#D90429',
    "button-text-color": "white",
    "button-bg-color": '#D90429',
    "button-bg-color-hover": '#EF233C',
  }),
  new Theme('basic-light', {
    'bg-color': '#EDF2F4',
    'bg-gradient1': '#EDF2F4',
    'bg-gradient2': '#EDF2F4',
    'text-color': '#8D99AE',
    'text-color-hover': '#D90429',
    "button-text-color": "white",
    "button-bg-color": '#D90429',
    "button-bg-color-hover": '#EF233C',
  }),
]