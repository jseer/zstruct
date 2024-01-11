import {
  Compare,
  defaultCompare,
  CompareFn,
  swap,
  lessThanOrEqual,
  reverseCompare,
} from "./common/util";

export class MinHeap<T> {
  protected heap: T[] = [];

  constructor(protected compareFn: CompareFn<T> = defaultCompare) {}

  getParent(index: number) {
    if (index === 0) {
      return undefined;
    }
    return (index - 1) >> 1;
  }

  getLeft(index: number) {
    return 2 * index + 1;
  }

  getRight(index: number) {
    return 2 * index + 2;
  }

  get(index: number) {
    return this.heap[index];
  }

  canDown(current: number, downIndex: number) {
    return (
      this.compareFn(this.heap[current], this.heap[downIndex]) ===
      Compare.GREATER_THAN
    );
  }

  canUp(current: number, parent: number) {
    return (
      this.compareFn(this.heap[current], this.heap[parent]) ===
      Compare.LESS_THAN
    );
  }

  down(index: number) {
    const left = this.getLeft(index);
    const right = this.getRight(index);
    const size = this.size();
    let current = index;
    if (left < size && this.canDown(current, left)) {
      current = left;
    }
    if (right < size && this.canDown(current, right)) {
      current = right;
    }
    if (current !== index) {
      swap(this.heap, current, index);
      this.down(current);
    }
  }

  up(index: number) {
    let parent = this.getParent(index);
    while (index > 0 && this.canUp(index, parent!)) {
      swap(this.heap, parent!, index);
      index = parent!;
      parent = this.getParent(index);
    }
  }

  insert(value: T) {
    this.heap.push(value);
    this.up(this.size() - 1);
  }

  peek() {
    return this.heap[0];
  }

  shift() {
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.down(0);
    return value;
  }

  heapify(array: T[]) {
    this.heap = array ? array : [];
    let i = -1;
    while (++i < this.heap.length) {
      this.up(i);
    }
    return this.heap;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.heap.length;
  }

  toArray() {
    return this.heap.slice();
  }
}

export class MaxHeap<T> extends MinHeap<T> {
  constructor(
    protected compareFn: CompareFn<T> = reverseCompare(defaultCompare)
  ) {
    super(compareFn);
  }
}

export interface ConformFn<T> {
  (current: T, target: T): boolean;
}
function isHeap<T>(heap: MinHeap<T>, compareFn: CompareFn<T>) {
  const maxIndex = heap.getParent(heap.size() - 1);
  let i = -1;
  if (maxIndex) {
    let result = true;
    while (++i <= maxIndex) {
      const left = heap.getLeft(i);
      const right = heap.getRight(i);
      const current = heap.get(i);
      result =
        lessThanOrEqual(current, heap.get(left), compareFn) &&
        (right < heap.size()
          ? lessThanOrEqual(current, heap.get(right), compareFn)
          : true);
      if (!result) return false;
    }
  }
  return true;
}

export function isMinHeap<T>(
  heap: MinHeap<T>,
  compareFn: CompareFn<T> = defaultCompare
) {
  return isHeap(heap, compareFn);
}

export function isMaxHeap<T>(
  heap: MinHeap<T>,
  compareFn: CompareFn<T> = reverseCompare(defaultCompare)
) {
  return isHeap(heap, compareFn);
}
