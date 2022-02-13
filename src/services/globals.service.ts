import { writable } from "svelte/store"

export type GithubRepoData = {
  homepage: string
  description?: string
  created_at: Date
  html_url: string
  name: string
  archived: boolean
}

export const Github = {
  getUserRepos: async (): Promise<GithubRepoData[]> => await fetch('https://api.github.com/users/ndbaker1/repos').then(res => res.json())
}

export const showThemePickerStore = writable(false)

export const showNavigatorStore = writable(false)