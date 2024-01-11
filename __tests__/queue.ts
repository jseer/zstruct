import { Queue } from "../src";

describe("Queue", () => {
  test("Queue enqueue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.size()).toEqual(1);
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.peek()).toEqual(3);
  });

  test("Queue clear", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.clear();
    expect(queue.size()).toEqual(0);
  });
});
