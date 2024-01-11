import { SortedLinkedList } from "../src";
import { compare } from './testUtils';

describe("SortedLinkedList", () => {
  test("SortedLinkedList push size", () => {
    const sortedLinkedList = new SortedLinkedList(compare);
    sortedLinkedList.push({ sort: 1, name: '1'});
    sortedLinkedList.push({ sort: 3, name: '3'});
    sortedLinkedList.push({ sort: 2, name: '2'});
    sortedLinkedList.push({ sort: 5, name: '5'});
    sortedLinkedList.push({ sort: 4, name: '4'});
    expect(sortedLinkedList.size()).toEqual(5);
    expect(sortedLinkedList.get(2)!.name).toEqual('3');
    expect(sortedLinkedList.get(4)!.name).toEqual('5');
    sortedLinkedList.push({ sort: 1, name: '11'});
    expect(sortedLinkedList.get(1)!.name).toEqual('11');
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
