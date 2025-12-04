const dialStart: number = 0;
const dialEnd: number = 99;
let dialPosition: number = 50;

function runner(instructions: string[]):number {

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
        }
        
        if (dialPosition === 0) {
            acc = acc + 1;
        }
        
        return acc;
    }, 0)

    return result;
}

export default runner;