import { ArrayLike } from "./common/ArrayLike";
export class Queue<T> {
  protected items: ArrayLike<T>;
  constructor() {
    this.items = new ArrayLike();
  }

  enqueue(item: T) {
    return this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
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
