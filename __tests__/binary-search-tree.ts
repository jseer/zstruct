import { BinarySearchTree, isBST, randomNum } from "../src";

describe("BinarySearchTree", () => {
  test("BinarySearchTree push insert remove", () => {
    const bsTree = new BinarySearchTree();
    for(let i = 0; i < 50; i++) {
      bsTree.insert(randomNum(1,100));
    }
    expect(isBST(bsTree.getRoot())).toBeTruthy();
    bsTree.insert(-1);
    expect(bsTree.min()).toEqual(-1);
    bsTree.insert(101);
    expect(bsTree.max()).toEqual(101);
    for(let i = 0; i < 30; i++) {
      bsTree.remove(randomNum(1,100));
    }
    expect(isBST(bsTree.getRoot())).toBeTruthy();
  });
});
