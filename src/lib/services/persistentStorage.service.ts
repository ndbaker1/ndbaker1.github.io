const PREFIX = 'ANIME_IS_COOL'

export const Storage = {
  get(key: string): string {
    return sessionStorage.getItem(PREFIX + key)
  },
  set(key: string, value: string): void {
    sessionStorage.setItem(PREFIX + key, value)
  },
  getAll(): { key: string, value: string }[] {
    const items = []
    for (
      let i = 0, itemKey = sessionStorage.key(i);
      i < sessionStorage.length;
      i++, itemKey = sessionStorage.key(i)
    ) {
      if (itemKey.startsWith(PREFIX))
        items.push({
          key: itemKey.substring(PREFIX.length),
          value: sessionStorage.getItem(itemKey),
        })
    }
    return items
  },
  clear(): void {
    for (let i = sessionStorage.length, itemKey = sessionStorage.key(i); i >= 0; i--, itemKey = sessionStorage.key(i)) {
      if (itemKey.startsWith(PREFIX)) sessionStorage.removeItem(itemKey)
    }
  }
}