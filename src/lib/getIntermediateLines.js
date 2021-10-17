import { changeLine } from "../store/junction";
import { getStationLines } from "../store/stationLine";

export const totalLinePaths = [];

const isDestinationLine = (currentLine, destination) => {
    const destinationLines = getStationLines(destination);
// console.log(destination, destinationLines);
    destinationLines.forEach(destinationLine => {
        if (currentLine === destinationLine)
            return true;
        return false;
    });

}

export const getIntermediateLines = (linePath, currentLine, destination, visitedLines) => {

    linePath.push(currentLine);
    console.log(visitedLines);

    if (isDestinationLine(currentLine, destination)){
        totalLinePaths.push(linePath);
        return;
    }

    const currentLines = changeLine(currentLine);

    visitedLines[currentLine] = true;
    currentLines.forEach(line => {
        if (!visitedLines[line]){
            getIntermediateLines(linePath, line, destination, visitedLines);
        }
    });
    visitedLines[currentLine] = false;
    // linePath.length = linePath.length - 1;
}
