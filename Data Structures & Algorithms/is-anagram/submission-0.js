class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // check if size of both strings are equal else return false
        if(s.length!=t.length){
            return false
        } 

        // iterate through any of one string and store the count of character frequency in one map object
        const countMapData = new Map()
        console.log("s object klength: ", s.length)
        for(let i=0;i<s.length;i++){
            if(countMapData.has(s[i])){
                let getCount = countMapData.get(s[i])
                countMapData.set(s[i], getCount + 1)
            } else {
                countMapData.set(s[i],1)
            } 
        }
        console.log('s map object data: ', countMapData)
        for(let i=0;i<t.length;i++){
            if(countMapData.has(t[i])){
                let getCount = countMapData.get(t[i])
                countMapData.set(t[i], getCount - 1)
            }
        }
    console.log('s map object data after: ', countMapData)
    for(const [key,val] of countMapData){
        if(val>0){
            return false
        }
    }
        
        return true

    }
}
