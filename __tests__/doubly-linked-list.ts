import { DoublyLinkedList } from "../src";

describe("DoublyLinkedList", () => {
  test("DoublyLinkedList insert size", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(4);
    doublyLinkedList.push(5);
    expect(doublyLinkedList.size()).toEqual(5);
    doublyLinkedList.insert(2, 33);
    expect(doublyLinkedList.get(2)).toEqual(33);
    expect(doublyLinkedList.get(3)).toEqual(3);
  });

  test("DoublyLinkedList remove", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(4);
    doublyLinkedList.push(5);
    doublyLinkedList.remove(3);
    expect(doublyLinkedList.size()).toEqual(4);
    expect(doublyLinkedList.get(2)).toEqual(4);
    expect(doublyLinkedList.indexOf(2)).toEqual(1);
  });

  test("DoublyLinkedList getLast getHead", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(4);
    doublyLinkedList.push(5);
    doublyLinkedList.remove(1);
    doublyLinkedList.remove(5);
    expect(doublyLinkedList.getHead()).toEqual(2);
    expect(doublyLinkedList.getLast()).toEqual(4);
  });
});
