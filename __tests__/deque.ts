import { Deque } from "../src";

describe("Deque", () => {
  test("Deque length", () => {
    const deque = new Deque();
    deque.addFront(1);
    deque.addFront(2);
    deque.addBack(3);
    deque.addBack(4);
    expect(deque.size()).toEqual(4);
  });

  test("Deque peek", () => {
    const deque = new Deque();
    deque.addFront(1);
    deque.addBack(2);
    expect(deque.peekFront()).toEqual(1);
    expect(deque.peekBack()).toEqual(2);
  });

  test("Deque remove", () => {
    const deque = new Deque();
    deque.addFront(1);
    deque.addBack(2);
    deque.removeFront();
    expect(deque.size()).toEqual(1);
    deque.removeBack();
    expect(deque.size()).toEqual(0);
  });

  test("Deque clear", () => {
    const deque = new Deque();
    deque.addBack(1);
    deque.addBack(2);
    deque.addFront(3);
    deque.addFront(4);
    deque.clear();
    expect(deque.size()).toEqual(0);
  });
});
