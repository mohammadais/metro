import { getAllLines } from '../store/junction';
import { getStationLines } from '../store/stationLine';
// import { getIntermediateLines, 
  // totalLinePaths 
// } from './getIntermediateLines';

const solve = (path, currentLine, visitedLines) => {
  path.push(currentLine);
  // console.log(path);
  console.log(visitedLines);
}

export const getRoutes = (currentStation, destination) => {
  // unvisit all lines
  const allLines = getAllLines();
  const visitedLines = new Map();
  allLines.forEach(line => visitedLines.set(line, false));
  // console.log(allLines);    // "YELLOW", "PINK", "BLUE", "RED", "VIOLET", "MAGENTA", "ORANGE", "GREEN"]
  const path = [];
  const currentLines = ['RED', 'GREEN'];
  currentLines.forEach(currentLine => {
    visitedLines.set(currentLine, true);
    solve(path, currentLine, visitedLines);
    visitedLines.set(currentLine, false);
  })

  // get all line change path
  // const linePath = [];
  // const currentLines = getStationLines(currentStation);
  // currentLines.forEach(currentLine => {
  //   getIntermediateLines(linePath, currentLine, destination, visitedLines);
  // });
  // console.log(totalLinePaths);
}