
export function onEscape(dispatcher: () => void): (node: Node) => { destroy(): void } {
  return (): { destroy(): void } => {
    const handleEscape = (event) => {
      if (event.key == 'Escape')
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