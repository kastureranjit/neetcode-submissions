class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // iterate through the all elements of array
        // create map object and store every element of array in it in evry iteration
        // before that check if array element exists in map , if exists return true
        const mapData = new Map();
        for(let i=0; i<nums.length;i++){
            if(mapData.has(nums[i])){
                return true
            } 
            mapData.set(nums[i])
        }
        return false;
    }
}
