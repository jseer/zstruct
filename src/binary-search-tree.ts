import { TreeNode, NullableTreeNode } from "./common/node";
import { Compare, CompareFn, defaultCompare } from "./common/util";

interface OrderCallback<T> {
  (node: TreeNode<T>["item"]): void;
}

export class BinarySearchTree<T> {
  protected root: NullableTreeNode<T>;
  constructor(protected compareFn: CompareFn<T> = defaultCompare) {}

  getRoot() {
    return this.root;
  }

  setRoot(root: TreeNode<T>) {
    if (isBST(root, this.compareFn)) {
      return (this.root = root);
    }
  }

  insert(item: T) {
    const node = new TreeNode(item);
    if (this.root) {
      this.insertNode(this.root, item);
    } else {
      this.root = node;
    }
  }

  protected insertNode(node: TreeNode<T>, item: T) {
    if (node) {
      if (this.compareFn(item, node.item) === Compare.LESS_THAN) {
        if (node.left) {
          this.insertNode(node.left, item);
        } else {
          node.left = new TreeNode(item);
        }
      } else if (!node.right) {
        node.right = new TreeNode(item);
      } else {
        this.insertNode(node.right, item);
      }
    }
  }

  inOrderTraversal(callback: OrderCallback<T>) {
    if (this.root) {
      this.inOrderTraversalNode(this.root, callback);
    }
  }

  protected inOrderTraversalNode(
    node: NullableTreeNode<T>,
    callback: OrderCallback<T>
  ) {
    if (node) {
      node.left && this.inOrderTraversalNode(node.left, callback);
      callback(node.item);
      node.right && this.inOrderTraversalNode(node.right, callback);
    }
  }
  preOrderTraversal(callback: OrderCallback<T>) {
    if (this.root) {
      this.preOrderTraversalNode(this.root, callback);
    }
  }

  protected preOrderTraversalNode(
    node: NullableTreeNode<T>,
    callback: OrderCallback<T>
  ) {
    if (node) {
      callback(node.item);
      node.left && this.preOrderTraversalNode(node.left, callback);
      node.right && this.preOrderTraversalNode(node.right, callback);
    }
  }
  postOrderTraversal(callback: OrderCallback<T>) {
    if (this.root) {
      this.postOrderTraversalNode(this.root, callback);
    }
  }

  protected postOrderTraversalNode(
    node: NullableTreeNode<T>,
    callback: OrderCallback<T>
  ) {
    if (node) {
      node.left && this.postOrderTraversalNode(node.left, callback);
      node.right && this.postOrderTraversalNode(node.right, callback);
      callback(node.item);
    }
  }

  search(item: T) {
    return this.searchNode(this.root, item);
  }

  protected searchNode(node: NullableTreeNode<T>, item: T): boolean {
    if (node) {
      if (this.compareFn(item, node.item) === Compare.LESS_THAN) {
        return this.searchNode(node.left, item);
      } else if (this.compareFn(item, node.item) === Compare.GREATER_THAN) {
        return this.searchNode(node.right, item);
      }
      return true;
    }
    return false;
  }

  min() {
    return this.findMinNode(this.root)?.item;
  }

  protected findMinNode(node: NullableTreeNode<T>) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  max() {
    return this.findMaxNode(this.root)?.item;
  }

  protected findMaxNode(node: NullableTreeNode<T>) {
    while (node && node.right) {
      node = node.right;
    }
    return node;
  }

  remove(item: T) {
    const ctx = { removed: false };
    this.root = this.removeNode(this.root, item, ctx);
    return ctx.removed;
  }

  protected removeNode(
    node: NullableTreeNode<T>,
    item: T,
    ctx: { removed?: boolean } = {}
  ): NullableTreeNode<T> {
    if (node) {
      if (this.compareFn(item, node.item) === Compare.LESS_THAN) {
        node.left = this.removeNode(node.left, item, ctx);
        return node;
      } else if (this.compareFn(item, node.item) === Compare.GREATER_THAN) {
        node.right = this.removeNode(node.right, item, ctx);
        return node;
      } else {
        ctx.removed = true;
        if (!(node.left && node.right)) {
          return null;
        }
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
        const n = this.findMinNode(node.right);
        node.item = n!.item;
        node!.right = this.removeNode(node.right, n!.item);
        return node;
        // todo:
        // n!.left = node.left;
        // n!.right = this.removeNode(node.right, n!.item);
        // return n;
      }
    }
  }
}

export function isBST<T>(
  node: NullableTreeNode<T>,
  compareFn: CompareFn<T> = defaultCompare
) {
  if (!node) return false;
  let result = true;
  let prev: NullableTreeNode<T> = null;
  const dfs = (node: NullableTreeNode<T>) => {
    if (!result || !node) return;
    dfs(node.left);
    if (prev && compareFn(prev.item, node.item) === Compare.GREATER_THAN) {
      result = false;
      return;
    }
    prev = node;
    dfs(node.right);
  };
  dfs(node);
  return result;
}
