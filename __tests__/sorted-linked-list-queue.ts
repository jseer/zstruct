import { SortedLinkedListQueue } from "../src";
import { reverseCompare } from "../src/common/util";
import { compare } from "./testUtils";

describe("SortedLinkedListQueue", () => {
  test("SortedLinkedListQueue enqueue", () => {
    const queue = new SortedLinkedListQueue(reverseCompare(compare));
    queue.enqueue({ sort: 1, name: "1" });
    queue.enqueue({ sort: 2, name: "2" });
    expect(queue.dequeue()!.name).toEqual("2");
    expect(queue.size()).toEqual(1);
    queue.enqueue({ sort: 3, name: "3" });
    expect(queue.dequeue()!.name).toEqual("3");
    expect(queue.dequeue()!.name).toEqual("1");
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue({ sort: 3, name: "3" });
    queue.enqueue({ sort: 4, name: "4" });
    expect(queue.peek()!.name).toEqual("4");
    queue.enqueue({ sort: 4, name: "44" });
    expect(queue.peek()!.name).toEqual("4");
    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()!.name).toEqual("3");
  });

  test("SortedLinkedListQueue clear", () => {
    const queue = new SortedLinkedListQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.clear();
    expect(queue.size()).toEqual(0);
  });
});
