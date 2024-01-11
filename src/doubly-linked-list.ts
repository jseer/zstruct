import { DoublyLinkedNode } from "./.internal/node";
import { EqualsFunction, defaultEquals } from "./.internal/util";
import { BaseLinkedList } from "./.internal/base-linked-list";

export class DoublyLinkedList<T> extends BaseLinkedList<T> {
  protected head: DoublyLinkedNode<T> | undefined = undefined;
  protected tail: DoublyLinkedNode<T> | undefined = undefined;

  push(item: T) {
    const node = new DoublyLinkedNode(item);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    return ++this.count;
  }

  insert(index: number, item: T) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyLinkedNode(item);
      if (index === 0) {
        if (this.head) {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        } else {
          this.head = node;
          this.tail = node;
        }
      } else if (index === this.count) {
        this.tail!.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        const prev = this.getNodeAt(index - 1);
        node.next = prev!.next;
        prev!.next = node;
        node.prev = prev;
        node.next!.prev = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  protected removeAt(index: number) {
    if (this.head && index >= 0 && index < this.count) {
      if (index === 0) {
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = undefined;
        } else {
          this.tail = this.head;
        }
      } else {
        const prev = this.getNodeAt(index - 1) as DoublyLinkedNode<T>;
        prev!.next = prev!.next!.next;
        if (prev!.next) {
          prev!.next!.prev = prev;
        }
        if (index === this.count - 1) {
          this.tail = prev;
        }
      }
      this.count--;
      return true;
    }
    return false;
  }
}
