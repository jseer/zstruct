import { BaseLinkedList } from "./.internal/base-linked-list";

export class LinkedList<T> extends BaseLinkedList<T> {
  insert(index: number, item: T) {
    return super.insert(index, item);
  }
}
