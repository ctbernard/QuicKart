const graphFunc = require('./graph');
const dijkstra = require('./dijkstra');
const astar = require('./astar');

describe('Pathfinding Algorithms', () => {

  let graph;
  let start;
  let end;

  beforeEach(() => {
    // Define a simple map object with a 5x5 dimension and no obstacles.
    const map = {
      width: 4,
      length: 4,
      aisle: [],
      entrance: [],
      checkout: []
    };

    // Generate the graph based on the provided map.
    graph = graphFunc(map);

    // Define start and end points for the 5x5 grid.
    start = graph[0][0];
    end = graph[4][4];
  });

  test('Dijkstra should return a valid path from start to end', () => {
    const path = dijkstra(graph, start, end);

    expect(path).toBeInstanceOf(Array);
    expect(path[0]).toEqual(start);
    expect(path[path.length - 1]).toEqual(end);
  });

  test('A* should return a valid path from start to end', () => {
    const path = astar(graph, start, end);

    expect(path).toBeInstanceOf(Array);
    expect(path[0]).toEqual(start);
    expect(path[path.length - 1]).toEqual(end);
  });

});