export const Storage = {
  get(item: string): string {
    return sessionStorage.getItem(item)
  },
  set(key: string, item: string): void {
    sessionStorage.setItem(key, item)
  },
}