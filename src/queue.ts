import { ArrayLike } from "./.internal/ArrayLike";
export class Queue<T> {
  protected items: ArrayLike<T>;
  constructor() {
    this.items = new ArrayLike();
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.start];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items.length = 0;
  }

  toString() {}
}
