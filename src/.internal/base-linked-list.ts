import { DoublyLinkedNode, LinkedNode } from "./node";
import { EqualsFunction, defaultEquals } from "./util";

export class BaseLinkedList<T> {
  protected count = 0;
  protected head: LinkedNode<T> | DoublyLinkedNode<T> | undefined;
  protected tail: LinkedNode<T> | DoublyLinkedNode<T> | undefined;
  constructor(protected equalsFn: EqualsFunction<T> = defaultEquals) {}

  push(item: T) {
    const node = new LinkedNode(item);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    return ++this.count;
  }

  protected insert(index: number, item: T) {
    if (index >= 0 && index <= this.count) {
      const node = new LinkedNode(item);
      if (index === 0) {
        node.next = this.head;
        this.tail = this.head ? this.head : node;
        this.head = node;
      } else if (index === this.count) {
        this.tail!.next = node;
        this.tail = node;
      } else {
        const prev = this.getNodeAt(index - 1);
        node.next = prev!.next;
        prev!.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  remove(item: T) {
    const index = this.indexOf(item);
    return this.removeAt(index);
  }

  indexOf(item: T) {
    let i = -1;
    let current = this.head;
    while (++i < this.count) {
      if (this.equalsFn(item, current!.item)) {
        return i;
      }
      current = current!.next;
    }
    return -1;
  }

  get(index: number) {
    return this.getNodeAt(index)?.item;
  }

  getLast() {
    return this.tail?.item;
  }

  getHead() {
    return this.head?.item;
  }

  protected removeAt(index: number) {
    if (this.head && index >= 0 && index < this.count) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        const prev = this.getNodeAt(index - 1);
        prev!.next = prev!.next!.next;
        if (index === this.count - 1) {
          this.tail = prev;
        }
      }
      this.count--;
      return true;
    }
    return false;
  }

  protected getNodeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let i = -1;
      let current = this.head;
      while (++i < index) {
        current = current!.next;
      }
      return current;
    }
    return undefined;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.count = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  toString() {
    let i = -1;
    let current = this.head;
    let str = "";
    while (++i < this.count) {
      str += current!.toString() + (i === this.count - 1 ? "" : "->");
      current = current!.next;
    }
    return str;
  }
}
