'use strict';

const openPassage = (x, graph, solution, position) => {
    if (graph[solution[position-1]][x] === 0) {
        return 0;
    }
    for (let i = 0; i < position; i++) {
        if (solution[i] === x) {
            return 0;
        }
    }
    return 1;
};

const hamiltonLoopUtil = (graph, solution, position) => {
    if (position === graph.length) {
        if (graph[solution[position-1]][solution[0]] !== 0) {
          return 1;
        } else return 0;
    }
    for (let i = 0; i < graph.length; i++) {
      if (openPassage(i, graph, solution, position)) {
        solution[position] = i;
        if (hamiltonLoopUtil(graph, solution, position + 1)) {
          return 1;
        }
        solution[position] = -1;
      }
    }
    return 0;
};

const showSolution = (arr) => {
  let output = "Solution exist:"
  for (let i = 0; i < arr.length; i++) {
    output += " " + arr[i];
  }
  output += " " + arr[0];
  console.log(output);
}

const getHamiltonLoop = (graph, vertex) => {
  if (vertex > graph.length) {
    throw new Error("Vertex can't be bigger than size of graph!");
  }
  for (let i = 0; i < graph.length; i++) {
    let arr = graph[i];
    if (graph.length !== arr.length) {
      throw new Error("It`s not a matrix!")
    }
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j] !== graph[j][i]) {
        throw new Error("It`s not a graph!");
      }
    }
  }
  let solution = [];
  for (let i = 0; i < graph.length; i++) {
    solution[i] = -1
  }
  solution[0] = vertex;
  if (!hamiltonLoopUtil(graph, solution, 1)) {
    console.log("\nSolution does not exist!");
    return;
  }
  showSolution(solution);
};

module.exports = getHamiltonLoop;
