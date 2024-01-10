import { Queue } from "../src";

describe("Queue", () => {
  test("Queue length", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(2);
  });

  test("Queue dequeue", () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeUndefined();
  });

  test("Queue size", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.size()).toEqual(0);
    queue.enqueue(1);
    expect(queue.size()).toEqual(1);
  });
  test("Queue isEmpty", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test("Queue peek", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
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
