import { MinHeap, MaxHeap, isMinHeap, isMaxHeap, randomNumber } from "../src";

describe("Heap", () => {
  test("MinHeap", () => {
    const minHeap = new MinHeap();
    minHeap.heapify(new Array(100).fill(randomNumber(1, 100)));
    expect(isMinHeap(minHeap)).toBeTruthy();
    minHeap.insert(0);
    expect(minHeap.peek()).toEqual(0);
    minHeap.shift();
    expect(isMinHeap(minHeap)).toBeTruthy();
  });

  test("MaxHeap", () => {
    const maxHeap = new MaxHeap();
    maxHeap.heapify(new Array(100).fill(randomNumber(1, 100)));
    expect(isMaxHeap(maxHeap)).toBeTruthy();
    maxHeap.insert(101);
    expect(maxHeap.peek()).toEqual(101);
    maxHeap.shift();
    expect(isMinHeap(maxHeap)).toBeTruthy();
  });
});
