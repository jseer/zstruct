import { ArrayLike } from "./.internal/ArrayLike";

export class Deque<T> {
  protected items: ArrayLike<T>;
  constructor() {
    this.items = new ArrayLike();
  }

  addFront(item: T) {
    this.items.unshift(item);
  }

  addBack(item: T) {
    this.items.push(item);
  }

  removeFront() {
    return this.items.shift();
  }

  removeBack() {
    return this.items.pop();
  }

  peekFront() {
    return this.items[this.items.start];
  }

  peekBack() {
    return this.items[this.items.end - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items.length = 0;
  }

  size() {
    return this.items.length;
  }
  toString() {}
}
