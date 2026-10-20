class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // initialize one map object
        const mapObject = new Map()

        // iterate through elemnets of nums, and on each iteration check if target-num[i] is exists in map, if yes then return its index, if not then add nums[i] in map 
       
        for(let i=0;i<nums.length;i++){
            let differenceNumber = target - nums[i]
            if(mapObject.has(differenceNumber)){
                return[
               i,
                mapObject.get(differenceNumber)]
            }
            mapObject.set(nums[i],i) 
        }
        
    }
}
