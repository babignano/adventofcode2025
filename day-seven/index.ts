
function runner(diagram:string[][], part:number = 1):number {

    // find index of 'S'
    const sIndex = diagram[0].findIndex(item => item === 'S');

    // remove S line
    diagram.pop();

    // Map: position -> count of timelines at that position
    let timelineCounts = new Map<number, number>();
    let splitCounts = 0;
    timelineCounts.set(sIndex, 1); // Start with 1 timeline at S
    
    for (let row = 1; row < diagram.length; row++) {
        const nextCounts = new Map<number, number>();
        
        for (const [pos, count] of timelineCounts) {
            const cell = diagram[row][pos];
            
            if (cell === '.') {
                // All timelines at this pos continue straight
                nextCounts.set(pos, (nextCounts.get(pos) || 0) + count);
            } 
            else if (cell === '^') {
                // Each timeline splits into 2
                nextCounts.set(pos - 1, (nextCounts.get(pos - 1) || 0) + count);
                nextCounts.set(pos + 1, (nextCounts.get(pos + 1) || 0) + count);
                splitCounts = splitCounts + 1;
            }
            else {
                nextCounts.set(pos, (nextCounts.get(pos) || 0) + count);
            }
        }
        
        timelineCounts = nextCounts;
    }
    
    // Sum up all timeline counts across all final positions
    let totalTimelines = 0;
    for (const count of timelineCounts.values()) {
        totalTimelines += count;
    }
    
    if (part === 1) {
        return splitCounts;
    }
    return totalTimelines;
}

export { runner }
