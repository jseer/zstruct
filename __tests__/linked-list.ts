import { LinkedList } from "../src";

describe("LinkedList", () => {
  test("LinkedList insert size toString", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    expect(linkedList.size()).toEqual(5);
    linkedList.insert(2, 33);
    expect(linkedList.get(2)).toEqual(33);
    expect(linkedList.get(3)).toEqual(3);
    expect(linkedList.toString()).toEqual("1->2->33->3->4->5");
  });

  test("LinkedList remove", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.remove(3);
    expect(linkedList.size()).toEqual(4);
    expect(linkedList.get(2)).toEqual(4);
    expect(linkedList.indexOf(2)).toEqual(1);
  });

  test("LinkedList getLast getHead", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.remove(1);
    linkedList.remove(5);
    expect(linkedList.getHead()).toEqual(2);
    expect(linkedList.getLast()).toEqual(4);
  });
});
