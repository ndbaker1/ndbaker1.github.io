export function clickOutside(dispatcher: () => void): (node: Node) => {
  destroy(): void;
} {
  return (node): { destroy(): void } => {
    const handleClick = (event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        dispatcher();
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      },
    };
  };
}
