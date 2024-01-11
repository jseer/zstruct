import { SortedLinkedList } from "./sorted-linked-list";

export class SortedLinkedListQueue<T> extends SortedLinkedList<T> {
  enqueue(item: T) {
    return super.push(item);
  }

  dequeue() {
    const head = this.getHead();
    super.removeHead();
    return head;
  }

  peek() {
    return super.getHead();
  }
}
