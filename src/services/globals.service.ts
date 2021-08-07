import { writable } from "svelte/store"

export const Links = {
  github: 'https://github.com/ndbaker1',
  resume: 'https://drive.google.com/file/d/1iIP7YMc61-OE1KJiTJB54PdTk87TsPLX/view'
}

export const Github = {
  getUserRepos: async (): Promise<any[]> => await fetch('https://api.github.com/users/ndbaker1/repos').then(res => res.json())
}

export const showThemePickerStore = writable(false)