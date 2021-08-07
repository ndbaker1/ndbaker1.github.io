export const Storage = {
  get(key: string): string {
    return sessionStorage.getItem(key)
  },
  set(key: string, value: string): void {
    sessionStorage.setItem(key, value)
  },
}