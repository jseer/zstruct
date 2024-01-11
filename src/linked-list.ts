import { BaseLinkedList } from "./common/base-linked-list";

export class LinkedList<T> extends BaseLinkedList<T> {
  push(item: T) {
    return super.push(item);
  }

  insert(index: number, item: T) {
    return super.insert(index, item);
  }
}
