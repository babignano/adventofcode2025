

function rotateMatrixAntiClockwiseAlternate(matrix:string[][]):string[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // The new matrix will have dimensions cols x rows
    const rotated = new Array(cols).fill(0).map(() => new Array(rows));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
        // New position: (N - 1 - j, i) for a square matrix, 
        // generalized for rectangular: (newRow, newCol) = (j, rows - 1 - i)
        rotated[cols - 1 - j][i] = matrix[i][j]; 
        }
    }
    return rotated;
}

function convertToColumnNumbers(number:string[]):string[] {

    number = number.map(item => item.split(''));
    
    number = rotateMatrixAntiClockwiseAlternate(number);

    // convert back to one number
    number = number.map(item => parseInt(item.join('')))

    return number;
}

function runner(list:string[][], part:number = 1):number {

    // transpose to operator at the end
    list = rotateMatrixAntiClockwiseAlternate(list);
    const len = list.length;
    let answer = 0;
   
    // place first operator in between
    for (let i = 0; i < len; i++) {

        const op = list[i].pop();
        const line = part === 1 ? list[i] : convertToColumnNumbers(list[i]);

        answer = answer + line.reduce((acc, item) => {

            if (op === '+') {
                acc = acc + parseInt(item);
            } else {
                if (acc === 0) {
                    acc = parseInt(item);
                } else {
                    acc = acc * parseInt(item);
                }
            }
            return acc;

        }, 0);
    }

    return answer;      
}

export { runner }