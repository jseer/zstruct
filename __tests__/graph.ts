import { Graph } from '../src';

describe('Graph', () => {
  test('Graph addVertex addEdge', () => {
    const graph = new Graph();
    graph.addVertex('a');
    graph.addVertex('b');
    graph.addEdge('a', 'b');
    expect(graph.getAdjList().get('a')!.has('b')).toBeTruthy();
    expect(graph.getAdjList().get('b')!.has('a')).toBeTruthy();
    graph.addEdge('c', 'd');
    expect(graph.getAdjList().get('c')!.has('d')).toBeTruthy();
    expect(graph.getAdjList().get('d')!.has('c')).toBeTruthy();
    const graph2 = new Graph(false);
    graph2.addEdge('a', 'b');
    expect(graph2.getAdjList().get('d')).toBeUndefined();
  });
});
