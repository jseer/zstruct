export class TreeNode<T> {
  constructor(
    public key: T,
    public left: TreeNode<T>,
    public right: TreeNode<T>
  ) {}
}

export class LinkedNode<T> {
  constructor(public item: T, public next?: LinkedNode<T>) {}
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
