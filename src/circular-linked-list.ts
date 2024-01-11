import { BaseLinkedList } from "./common/base-linked-list";

export class CircularLinkedList<T> extends BaseLinkedList<T> {
  push(item: T) {
    const count = super.push(item);
    this.tail!.next = this.head;
    return count;
  }

  insert(index: number, item: T) {
    const inserted = super.insert(index, item);
    if (inserted && index === this.count - 1) {
      this.tail!.next = this.head;
    }
    return inserted;
  }

  protected removeAt(index: number) {
    const removed = super.removeAt(index);
    if (removed) {
      if (index === 0) {
        if (this.head) {
          this.tail!.next = this.head;
        }
      } else if (index === this.count) {
        this.tail!.next = this.head;
      }
    }
    return removed;
  }

  getNodeAt(index: number){
    return super.getNodeAt(index);
  }

  toString() {
    const str = super.toString();
    return `[Circular: ${str}]`;
  }
}
