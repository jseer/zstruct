import { SortedLinkedList } from "../src";

describe("SortedLinkedList", () => {
  test("SortedLinkedList push size", () => {
    const sortedLinkedList = new SortedLinkedList();
    sortedLinkedList.push(1);
    sortedLinkedList.push(3);
    sortedLinkedList.push(2);
    sortedLinkedList.push(5);
    sortedLinkedList.push(4);
    expect(sortedLinkedList.size()).toEqual(5);
    expect(sortedLinkedList.get(2)).toEqual(3);
    expect(sortedLinkedList.get(4)).toEqual(5);
  });

  test("SortedLinkedList insert size", () => {
    const sortedLinkedList = new SortedLinkedList();
    sortedLinkedList.push(1);
    sortedLinkedList.push(3);
    sortedLinkedList.push(2);
    sortedLinkedList.push(5);
    sortedLinkedList.push(4);
    expect(sortedLinkedList.size()).toEqual(5);
    expect(sortedLinkedList.get(2)).toEqual(3);
    expect(sortedLinkedList.get(4)).toEqual(5);
  });
});
