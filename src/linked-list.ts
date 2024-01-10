import { BaseLinkedList } from "./.internal/base-linked-list";
import { LinkedNode } from "./.internal/node";
import { EqualsFunction, defaultEquals } from "./.internal/util";

export class LinkedList<T> extends BaseLinkedList<T> {
  protected head: LinkedNode<T> | undefined = undefined;
  protected tail: LinkedNode<T> | undefined = undefined;
  constructor(protected equalsFn: EqualsFunction<T> = defaultEquals) {
    super(equalsFn);
  }

  insert(index: number, item: T) {
    return super.insert(index, item);
  }
}
