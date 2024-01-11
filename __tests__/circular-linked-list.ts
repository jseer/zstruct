import { CircularLinkedList } from "../src";

describe("CircularLinkedList", () => {
  test("CircularLinkedList push insert remove", () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.push(1);
    circularLinkedList.push(2);
    circularLinkedList.push(3);
    circularLinkedList.push(4);
    circularLinkedList.push(5);
    expect(circularLinkedList.size()).toEqual(5);
    expect(circularLinkedList.getNodeAt(4)!.next!.item).toEqual(1);
    circularLinkedList.insert(4, 33);
    expect(circularLinkedList.getNodeAt(5)!.next!.item).toEqual(1);
    circularLinkedList.insert(6, 333);
    expect(circularLinkedList.getNodeAt(6)!.next!.item).toEqual(1);
    circularLinkedList.remove(333);
    expect(circularLinkedList.getNodeAt(5)!.next!.item).toEqual(1);
    circularLinkedList.remove(1);
    expect(circularLinkedList.getNodeAt(4)!.next!.item).toEqual(2);
  });
});
