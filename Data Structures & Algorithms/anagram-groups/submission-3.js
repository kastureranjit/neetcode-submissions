class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // first iterate through each string from array element and     
        const groups = new Map()

        for(const word of strs){
                // create 26 elemnets of empty array
                const count = new Array(26).fill(0)
                for(const ch of word){
                    // identify in which box the char should be assigned
                    const box = ch.charCodeAt(0) - 97
                    // add 1 to the box
                    count[box]++
                }
                // create subarray
                const key = count.join(',') 
                if(!groups.has(key))  groups.set(key,[]) 
                groups.get(key).push(word)
                
        }
        return [...groups.values()]
    }
}
