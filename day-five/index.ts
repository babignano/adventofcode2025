type Range = {
    high: number
    low: number
};

function runner(ranges: string[], ids: string[], part: number = 1):number {
    
    function partOne(ranges: string[], ids: string[]): number {
        const matches = ids.reduce((acc, current):number[] => {

            const result = ranges.reduce((rangeAcc, rangeItem):number[] => {
                
                const low = parseInt(rangeItem.split('-')[0]);
                const high = parseInt(rangeItem.split('-')[1]);
                const num = parseInt(current);

                if (num  >= low && num  <= high) {
                    rangeAcc.push(num);
                    return rangeAcc;
                }
                
                return rangeAcc;
            }, []);

            return acc.concat(result);

        }, []);

        return new Set(matches).size
    }

    function partTwo(ranges: string[]) {


        function hasOverlap(ranges: string[]) {

            if (ranges.length === 0) {
                return ranges;
            }
            return ranges.find((elem, i, arr) => elem[1] >= arr[i + 1]?.[0])
        }

        function removeDuplicates(ranges: string[]):string[] {
            return ranges.filter((item, index) => {
                return ranges.indexOf(item) === index;
            });
        }

        function removeFullOverlaps(ranges: string[]):string[] {
            return ranges.reduce((acc:string[], item, index, arr) => {

                const isFullOverlap = arr.find((elem, i) => {
                
                    // check we are not comparing the same index
                    if  (index !== i) {
                        return item[0] >= elem[0] && item[1] <= elem[1];
                    } 
                });

                if (!isFullOverlap) {
                    acc.push(item)
                }
                return acc;
            }, []);

        }

        //console.log('removeFullOverlaps', removeFullOverlaps(rangesSplit))
    
        function mergeOverlaps(ranges: string[]):string[] {

            return ranges.reduce((acc:string[], item, index, arr) => {

                // compare current range to next range to find overlap
                if (item[1] >= arr[index + 1]?.[0]){
                    acc.push([item[0], arr[index + 1][1]])
                    arr.splice(index + 1, 1);
                } else {
                    acc.push(item)
                }
                return acc;

            }, []);
        };

        const sorted = ranges.sort((current, next): number => {
            return parseInt(current.replace('-', '')) - parseInt(next.replace('-', ''));
        });

        let duplicatesRemoved = removeDuplicates(sorted);

        const rangesSplit = duplicatesRemoved.map((range):number[] => {
            return [ parseInt(range.split('-')[0]), parseInt(range.split('-')[1]) ];
        });

        let fullOverlapsRemoved = removeFullOverlaps(rangesSplit)

        let merged = removeFullOverlaps(mergeOverlaps(fullOverlapsRemoved));

        while(hasOverlap(merged)) {
            merged = mergeOverlaps(merged);
        }

        return merged.reduce((acc, item) => {
            return acc + item[1] - item [0] + 1 // it's inclusive!
        }, 0); 
    }

    if (part === 2) {
        return partTwo(ranges);
    }

    return partOne(ranges, ids);
      
}

export { runner }