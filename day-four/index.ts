type Pos = {
    x: number
    y: number
};

function runner(input: string[], recusive: boolean = false): number {

    const gridInput:string[][] = input.map(item => item.split(''));
    
    function find(grid: string[][])  {

        let rolls: number = 0;
        const positions: Pos[] = [];

        for (let y: number = 0; y < grid.length; y++) {
            for (let x: number = 0; x < grid[0].length; x++) {
                let adjacent = 0;

                if (grid[y][x] === '@') {
                    // get left and right
                    adjacent = adjacent + (grid[y][x - 1] === '@' ? 1 : 0);
                    adjacent = adjacent + (grid[y][x + 1] === '@' ? 1 : 0);

                    // top and bottom
                    adjacent = adjacent + (grid?.[y - 1]?.[x] === '@' ? 1 : 0);
                    adjacent = adjacent + (grid?.[y + 1]?.[x] === '@' ? 1 : 0);

                    // top-right and top-left
                    adjacent = adjacent + (grid?.[y - 1]?.[x - 1] === '@' ? 1 : 0);
                    adjacent = adjacent + (grid?.[y - 1]?.[x + 1] === '@' ? 1 : 0);

                    // bottom-right and bottom-left
                    adjacent = adjacent + (grid?.[y + 1]?.[x - 1] === '@' ? 1 : 0);
                    adjacent = adjacent + (grid?.[y + 1]?.[x + 1] === '@' ? 1 : 0);

                    // Found roll that can be cleared 
                    if (adjacent < 4) {
                        rolls = rolls + 1;
                        positions.push({y: y, x: x})
                    }
                }
            }
        }

        return positions;
    }

    function remove(positions: Pos[], grid: string[][]) {

        const gridCopy = [...grid];
        positions.map((pos) => {
            gridCopy[pos.y][pos.x] = '.';
        });
        return gridCopy;
    }

    

    if (recusive) {
        let positions = find(gridInput);
        let count = positions.length;
        while(positions.length > 0) {
            positions = find(remove(positions, gridInput));
            count = count + positions.length;
        }
        return count;
    } else {
        return find(gridInput).length;
    }
    
}

export { runner }
