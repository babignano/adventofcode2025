

function runner(productIds: string[], onlyTwice: boolean = false): number {

    const result = productIds.reduce((acc, current) => {
        const ids = populateIds(current);
        const innerResult = ids.reduce((acc2, current2) => {
            if (invalidId(current2.toString(), onlyTwice)) {
                return acc2 + current2;
            }
            return acc2;
        }, 0);
        return acc + innerResult;

    }, 0);
    return result;

}

function isDupes(arr: string[]): boolean {
  return new Set(arr).size === 1;
}

function populateIds(productId: string): number[] {

    const start: number = parseInt(productId.split("-")[0]);
    const end: number = parseInt(productId.split("-")[1]);
    const result = [];

    let len = end - start;
    for (let i: number = 0; i <= len; i++) {
        result.push((start + i)); 
    }

    return result;
}


function invalidId(productId: string, onlyTwice: boolean) {

    let len:number = productId.length;
    let hasDupe: boolean = false;

    // repeat up to half the length
    for (let i: number = 1; i < len; i++) {

        let chunkSize = i; // 1
        let arr = [];

        for (let y: number = 0; y < len; y = y + chunkSize) {
            arr.push(productId.substring(y, y + chunkSize))
        }

        if (isDupes(arr)) {

            if (onlyTwice) {
                hasDupe = arr.length === 2
            } else {
                hasDupe = true
            }
        }
    }

    return hasDupe;
}

// function invalidId(productId: string) {

//     let len:number = productId.length;

//     // odd lengths are out as the pattern needs to be repeated twice
//     //if (len % 2 === 1) {
//     //    return false;
//     //}

//     // repeat up to half the length
//     for (let i: number = 0; i <= len; i++) {
//         const firstChunk = productId.substring(0, i + 1)
//         const nextChunk = productId.substring(i + 1, i + i + 2);

//         // console.log('firstChunk, nextChunk, i, len', firstChunk, nextChunk, i, len / 2)
//         if (firstChunk === nextChunk && i + 1 === len / 2) {
//             return true
//         }
//     }

//     return false;
// }



export { runner, invalidId, populateIds }