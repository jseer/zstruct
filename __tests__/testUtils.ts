import { Compare } from "../src/common/util";

interface CompareItem {
  sort: number;
  [key: string]: any;
}

export function compare(a: CompareItem, b: CompareItem) {
  if (a.sort === b.sort) {
    return Compare.EQUATION;
  }
  return a.sort < b.sort ? Compare.LESS_THAN : Compare.GREATER_THAN;
}
