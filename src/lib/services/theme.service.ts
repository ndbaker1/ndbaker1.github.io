import { Storage } from './persistentStorage.service';

type ColorVariables =
  | 'bg-color'
  | 'text-color'
  | 'text-color-hover'
  | 'button-text-color'
  | 'button-bg-color'
  | 'button-bg-color-hover';

const THEME_KEY = 'theme'

export class Theme {
  constructor(public name: string, public colors: Record<ColorVariables, string>) { }

  setCurrent(): void {
    const entries = Object.entries(this.colors)
    for (const [name, value] of entries) {
      document.documentElement.style.setProperty('--' + name, value);
    }
    Storage.set(THEME_KEY, this.name);
  }

  static refresh(): void {
    (themes.find((t) => t.name == Storage.get(THEME_KEY)) || themes[0]).setCurrent();
  }
}

export const themes = [
  new Theme('october', {
    'bg-color': '#342E37',
    'text-color': '#F6E8EA',
    'text-color-hover': '#FA824C',
    'button-text-color': 'white',
    'button-bg-color': '#FA824C',
    'button-bg-color-hover': '#FA824C40',
  }),
  new Theme('horizon', {
    'bg-color': '#312F2F',
    'text-color': '#F6E8EA',
    'text-color-hover': '#EF626C',
    'button-text-color': 'white',
    'button-bg-color': '#EF626C',
    'button-bg-color-hover': '#E8545E40',
  }),
  new Theme('dark', {
    'bg-color': '#2B2D42',
    'text-color': '#8D99AE',
    'text-color-hover': '#D90429',
    'button-text-color': 'white',
    'button-bg-color': '#EF233C',
    'button-bg-color-hover': '#D9042940',
  }),
  new Theme('beige-purple', {
    'bg-color': '#EFF8E2',
    'text-color': '#23022E',
    'text-color-hover': '#573280',
    'button-text-color': '#EFF8E2',
    'button-bg-color': '#573280',
    'button-bg-color-hover': '#23022E40',
  }),
];
