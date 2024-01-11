interface Iterator<T> {
  (value: T, index: number, array: T[] | ArrayLike<T>): any;
}

export function forEach<T>(
  arr: T[] | ArrayLike<T>,
  iterator: Iterator<T>,
  start: number = 0
) {
  let i = --start;
  const length = arr.length;
  while (++i < length) {
    iterator(arr[i], i, arr);
  }
}

export function forEachMap<T>(
  arr: T[] | ArrayLike<T>,
  iterator: Iterator<T>,
  start: number = 0
) {
  const result: any[] | { [n: number]: any; length: number } = Array.isArray(
    arr
  )
    ? []
    : { length: arr.length };
  forEach(
    arr,
    (item, i, arr) => {
      result[i] = iterator(item, i, arr);
    },
    start
  );
  return result;
}

export enum Compare {
  LESS_THAN = -1,
  GREATER_THAN = 1,
  EQUATION = 0,
}
export type CompareFn<T> = (a: T, b: T) => number;
export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUATION;
  }
  return a < b ? Compare.LESS_THAN : Compare.GREATER_THAN;
}

export function reverseCompare<T>(compareFn: CompareFn<T>): CompareFn<T> {
  return (a, b) => compareFn(b, a);
}
export function lessThanOrEqual<T>(
  a: T,
  b: T,
  compareFn: CompareFn<T> = defaultCompare
) {
  const result = compareFn(a, b);
  return result === Compare.LESS_THAN || result === Compare.EQUATION;
}
export function greaterThanOrEqual<T>(
  a: T,
  b: T,
  compareFn: CompareFn<T> = defaultCompare
) {
  const result = compareFn(a, b);
  return result === Compare.GREATER_THAN || result === Compare.EQUATION;
}

export type EqualsFn<T> = (a: T, b: T) => boolean;
export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}

export function swap(array: any[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}

export function randomNum(start: number, end: number) {
  return Math.floor(Math.random() * (end - start) + 1);
}
