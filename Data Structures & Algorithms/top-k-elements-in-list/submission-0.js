class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // iterate through the array elements and push each in map with its frequency
        const frequency = new Map()
        for(const num of nums){
            if(frequency.has(num)){
                frequency.set(num,frequency.get(num) +1)
            } else {
                frequency.set(num,1)
            }
        }
        
        //console.log('unsorted map: ', frequency)
        // sort the map in descending order
        const sortedMap = [...frequency.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(entry=>entry[0])

        //console.log('sorted map: ', sortedMap)
        return sortedMap;
    }
}
