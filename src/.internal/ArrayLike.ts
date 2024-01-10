import { forEach } from "./util";

export class ArrayLike<T> {
  [n: number]: T;
  start: number;
  end: number;
  constructor(...args: [number] | T[]) {
    this.start = 0;
    if (args.length > 0) {
      if (typeof args[0] === "number") {
        this.end = args[0];
      } else {
        forEach(args as T[], (item, i) => {
          this[i] = item;
        });
        this.end = args.length;
      }
    } else {
      this.end = 0;
    }
  }

  get length() {
    return this.size();
  }

  set length(len: number) {
    if (len < 0) len = 0;
    let i = this.start + len - 1;
    while (++i < this.end) {
      delete this[i];
    }
    this.end = this.start + len;
  }

  private size() {
    return this.end - this.start;
  }

  push(...arg: T[]) {
    forEach(arg, (item) => {
      this[this.end++] = item;
    });
    return this.length;
  }

  pop(): T | void {
    if (this.length) {
      return this[--this.end];
    }
  }

  shift() {
    if (this.length) {
      const start = this.start;
      delete this[this.start];
      this.start++;
      return start;
    }
  }

  unshift(...items: T[]) {
    if (items.length) {
      let i = -1;
      while (++i < items.length) {
        this[--this.start] = items[items.length - i - 1];
      }
    }
    return items.length;
  }

  fill(item: T) {
    forEach(this, (_, i) => {
      this[i] = item;
    });
    return this;
  }

  toArray() {
    const result: T[] = [];
    forEach(
      this,
      (item, i) => {
        result.push(item);
      },
      this.start
    );
    return result;
  }
}
