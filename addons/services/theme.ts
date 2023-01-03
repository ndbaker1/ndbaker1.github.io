import { Storage } from './persistentStorage';

interface Storable {
  get: Function,
  set: Function,
}

type ColorVariables =
  | 'bg-color'
  | 'text-color'
  | 'text-color-hover'
  | 'button-text-color'
  | 'button-bg-color'
  | 'button-bg-color-hover';

/**
 * Class to hold data for color themes and allow the creation of custom themes
 */
export class Theme {
  constructor(public name: string, public colors: Record<ColorVariables, string>) { }
}

/**
 * Theming Service,
 * Can be accessed from anyone in the code.
 */
export class ThemeService {

  // default themes
  static PRESETS: Theme[] = [
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

  // Theme key for persistent storage
  static readonly THEME_KEY = 'theme';
  // default store interface
  static Store: Storable = new Storage();


  static setCurrent(theme: Theme): void {
    Object.entries(theme.colors)
      .forEach(([name, value]) => document.documentElement.style.setProperty('--' + name, value))

    ThemeService.Store.set(ThemeService.THEME_KEY, theme.name);
  }

  static refresh(): void {
    const selectedTheme = ThemeService.PRESETS.find((t) => t.name == ThemeService.Store.get(ThemeService.THEME_KEY))
    const theme = selectedTheme || ThemeService.PRESETS[0];
    ThemeService.setCurrent(theme);
  }
}