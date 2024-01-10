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
export type CompareFunction<T> = (a: T, b: T) => number;
export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUATION;
  }
  return a < b ? Compare.LESS_THAN : Compare.GREATER_THAN;
}

export type EqualsFunction<T> = (a: T, b: T) => boolean;
export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}
