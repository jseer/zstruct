export class TreeNode<T> {
  constructor(
    public item: T,
    public left?: NullableTreeNode<T>,
    public right?: NullableTreeNode<T>
  ) {}
}
export type NullableTreeNode<T> = TreeNode<T> | null | undefined;
export class LinkedNode<T> {
  constructor(public item: T, public next?: LinkedNode<T>) {}
  toString() {
    return `${this.item}`;
  }
}

export class DoublyLinkedNode<T> extends LinkedNode<T> {
  constructor(
    public item: T,
    public next?: DoublyLinkedNode<T>,
    public prev?: DoublyLinkedNode<T>
  ) {
    super(item, next);
  }
}
