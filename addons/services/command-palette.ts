/// Command Pallete is a service for searching an option tree similar to vscode

/**
 * Enumates the possible responses for a search in pallete 
 */
export enum SelectionResponse {
  Executed,
  SubCommands,
  Invalid,
}

type SelectionPath = string[];
type SelectionEvent = () => any;

/**
 * Data Type for representing a unique path in the command tree
 */
export type SelectionItem = {
  pathItems: SelectionPath;
  // actions are optional and intended for terminal options
  action?: SelectionEvent;
}

type SelectionLeaf = SelectionTree | SelectionItem;
class SelectionTree extends Map<string, SelectionLeaf> { }


export class CommandPaletteService {

  private selectionTree = new SelectionTree();

  /**
   * Appends the Item to the option tree using its path
   * @param item item to register
   */
  public registerItem(item: SelectionItem): void {
    if (!item.pathItems) throw Error('cannot take an empty command path.');

    item.pathItems.reduce((map, pathKey, pathDepth) => {
      const next = map.get(pathKey) ?? new SelectionTree();
      if (next instanceof SelectionTree) {
        map.set(
          pathKey,
          pathDepth === item.pathItems.length - 1
            ? item
            : next
        );
        return next;
      } else {
        throw Error('unhandled.');
      }
    }, this.selectionTree);
  }

  /**
   * Search for items branching from the provided path
   * @param path pathItems provided for the query
   * @returns 
   */
  public query(path: SelectionPath): SelectionPath {
    // dont actually enter the last element, since we are just searching the options
    const leaf = this.traverse(path.splice(0, path.length - 1));

    if (!leaf) {
      return [];
    } else if (leaf instanceof SelectionTree) {
      const term = path[path.length - 1];
      return [...leaf]
        .map(([key, _]) => key.trim())
        .filter((key) => key.startsWith(term) || key.includes(term));
    } else {
      console.log('test')
      return [leaf.pathItems[leaf.pathItems.length - 1]];
    }
  }

  /**
   * Execue the path query, and return the status of the operation
   * @param path pathItems provided for the query
   * @returns status of the result from the selection
   */
  public execute(path: SelectionPath): SelectionResponse {
    const leaf = this.traverse(path);

    if (!leaf) {
      // return invalid command flag when the traversal is invalid
      return SelectionResponse.Invalid;
    } else if (leaf instanceof SelectionTree) {
      // return set of subcommands when map returned
      return SelectionResponse.SubCommands;
    } else {
      // if path leads to a valid command, execute it and return executed status
      if (leaf.action) leaf.action();
      return SelectionResponse.Executed;
    }
  }

  /**
   * Walks the option tree based on the input path and returns the leaf node 
   * @param path selectionPath for walking the option tree
   * @returns the last selection node in the path
   */
  private traverse(path: SelectionPath): SelectionLeaf {
    return path.reduce((branch, pathKey) => {
      if (branch instanceof SelectionTree && branch.has(pathKey)) {
        const next = branch.get(pathKey);
        if (!next) throw Error('Met with undefined command mapping.');
        return next;
      } else {
        return branch;
      }
    }, this.selectionTree);
  }
}
