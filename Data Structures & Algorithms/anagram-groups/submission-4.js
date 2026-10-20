class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // first iterate through each string from array element and     
        const groups = new Map()

        for(const word of strs){
                //console.log("word is: ", word)
                // create 26 elemnets of empty array
                const count = new Array(26).fill(0)
                //console.log("intial empty count with 26: ", count)
                for(const ch of word){
                    //console.log("charater is: ", ch)
                    // identify in which box the char should be assigned
                    const box = ch.charCodeAt(0) - 97
                    //console.log('identified box: ', box)
                    // add 1 to the box
                    count[box]++
                }
                // create subarray
                const key = count.join(',') 
                //console.log('after joining count: ', key)
                if(!groups.has(key))  groups.set(key,[]) 
                groups.get(key).push(word)
                //console.log('groups: ', groups)
                
        }
        return [...groups.values()]
    }
}
