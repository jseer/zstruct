import { BaseLinkedList } from "./.internal/base-linked-list";
import {
  Compare,
  CompareFunction,
  EqualsFunction,
  defaultCompare,
  defaultEquals,
} from "./.internal/util";

export class SortedLinkedList<T> extends BaseLinkedList<T> {
  constructor(
    protected equalsFn: EqualsFunction<T> = defaultEquals,
    protected compareFn: CompareFunction<T> = defaultCompare
  ) {
    super(equalsFn);
  }

  push(item: T) {
    const index = this.isEmpty() ? 0 : this.getIndexBySorted(item);
    super.insert(index, item);
    return this.count;
  }

  private getIndexBySorted(item: T) {
    let i = -1;
    let current = this.head;
    while (++i < this.size()) {
      const diff = this.compareFn(item, current!.item);
      if (diff === Compare.LESS_THAN) {
        return i;
      }
      current = current!.next;
    }
    return i;
  }
}
