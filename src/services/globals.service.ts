import { writable } from "svelte/store"

export const Github = {
  getUserRepos: async (): Promise<any[]> => await fetch('https://api.github.com/users/ndbaker1/repos').then(res => res.json())
}

export const showThemePickerStore = writable(false)