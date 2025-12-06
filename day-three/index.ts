type User = {
    num: number
    index: number
};

function runner(banks: string[], batteryLen:number): number {

    function highest(str:string, fromIndex:number, endIndex:number) {
        return str.split('').map((item) => parseInt(item)).reduce((acc, elem, index) => {

            if (elem > acc.num && index <= endIndex && index > fromIndex) {
               acc.num = elem;
               acc.index = index;
            }

            return acc;
        }, {num: 0, index: -1});
    }

    const result = banks.reduce((acc, batteries:string): number => {

        // need to find 12 matches of unique and sequential indexes
        const matches:User[] = new Array(batteryLen).fill({num: 0, index: -1});

        // method, look for highest number and mark location, then check next highest and mark location until we have 12 unique locations
        for (let i: number = 0; i < batteryLen; i++) {

            const prev = i === 0 ? i : i - 1;
            
            // i = 0 12 + 0 = 12 batteries.length === 15 15 - 12 = 3
            const h = highest(batteries, matches[prev].index, batteries.length - matches.length + i);

            matches[i] = h;
            
        }

        const total = matches.reduce((sum, item) => {
            return sum + item.num;
        }, '');

        return acc + parseInt(total)
    }, 0);

    return result;
}

export { runner }
