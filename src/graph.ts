export class Graph<T> {
  private vertices: Set<T> = new Set();
  private adjList: Map<T, Set<T>> = new Map();
  constructor(private isTwoWay = true) {}

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  addVertex(v: T) {
    if (!this.vertices.has(v)) {
      this.vertices.add(v);
      this.adjList.set(v, new Set());
    }
  }

  addEdge(a: T, b: T) {
    if (!this.adjList.has(a)) {
      this.addVertex(a);
    }
    if (!this.adjList.has(b)) {
      this.addVertex(b);
    }
    this.adjList.get(a)!.add(b);
    if (this.isTwoWay) {
      this.adjList.get(b)!.add(a);
    }
  }
}
