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

function invalidId(productId: string, onlyTwice: boolean = false) {

    let len:number = productId.length;
    let hasDupe: boolean = false;

    // check if part one and if odd
    if (onlyTwice && len % 2 === 1) {
        return false;
    }

    // check if all same charactar and pass
    const firstChar = productId[0];
    if ([...productId].every(char => char === firstChar[0]) && productId.length > 1) {
        console.log('yes', productId)
        return true;
    }

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

export { runner, invalidId, populateIds }
