const dialStart: number = 0;
const dialEnd: number = 99;

function runner(instructions: string[], dialPosition:number, anyclick: boolean = false):number {

    const formattedInstructions = instructions.map((ins) => {
        return {
            direction: ins.slice(0, 1),
            clicks: parseInt(ins.slice(1)),
        }
    });

    const result = formattedInstructions.reduce((acc, current) => {
        while(current.clicks--) {
            if (current.direction === 'R') {
                dialPosition = dialPosition + 1;
                if (dialPosition === dialEnd + 1) {
                    dialPosition = 0;
                }
            } else {
                dialPosition = dialPosition - 1;
                if (dialPosition === dialStart - 1) {
                    dialPosition = 99;
                }
            }

            if (anyclick === false) {
                if (dialPosition === 0 && current.clicks === 0) {
                    acc = acc + 1;
                }
            } else {
                if (dialPosition === 0) {
                    acc = acc + 1;
                }
            }
        }
        return acc;
    }, 0)

    return result;
}

export default runner;