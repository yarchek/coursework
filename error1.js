'use strict';

const hamiltonLoop = require('./HamiltonLoop.js');

const graph =
    [[0,1,1,0,1,1],
     [1,0,1,0,1,0],
     [0,1,0,1,1,0],
     [0,1,1,0,1,0],
     [1,1,1,1,0,0],
     [1,0,0,1,0,0]];

hamiltonLoop(graph, 2);
