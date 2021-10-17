const interchange = [
    ["YELLOW", "PINK"],
    ["YELLOW", "BLUE"],
    ["YELLOW", "RED"],
    ["YELLOW", "VIOLET"],
    ["YELLOW", "MAGENTA"],
    ["YELLOW", "ORANGE"],
    ["BLUE", "PINK"],
    ["BLUE", "VIOLET"],
    ["BLUE", "MAGENTA"],
    ["BLUE", "ORANGE"],
    ["PINK", "VIOLET"],
    ["PINK", "RED"],
    ["MAGENTA", "VIOLET"],
    ["GREEN", "PINK"],
    ["GREEN", "RED"]
];

const lines = new Map();
  interchange.forEach(line => {

    let present = lines.get(line[0]);
    if (present){
      lines.set(line[0], [...present, line[1]]);
    } else {
      lines.set(line[0], [line[1]]);
    }

    present = lines.get(line[1]);
    if (present){
      lines.set(line[1], [...present, line[0]]);
    } else {
      lines.set(line[1], [line[0]]);
    }
});

export const changeLine = (line) => lines.get(line);

export const getAllLines = () => {
	const allLines = [];
	for (let [line,] of lines.entries()) {
		allLines.push(line);
	}
	return allLines;
}
