
export function onKeys(keys: string[], dispatcher: () => void): (node: Node) => { destroy(): void } {
  return (): { destroy(): void } => {
    const handleEscape = (event) => {
      if (keys.includes(event.key))
        dispatcher()
    }

    document.addEventListener('keydown', handleEscape, true)

    return {
      destroy() {
        document.removeEventListener('keydown', handleEscape, true)
      },
    }
  }
}