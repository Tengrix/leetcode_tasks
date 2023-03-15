const findAllNumbersInArray = (nums) =>{
    let i = 0
    let curr = 0
    while(i < nums.length){
        let pos = nums[i] - 1
        if(nums[pos]!==nums[i]){
            curr = nums[i]
            nums[i] = nums[pos]
            nums[pos] = curr
        }else{
            i +=1
        }
    }
    let missingNums = []
    for(let i = 0; i < nums.length; i++){
        if(i+1!==nums[i]){
            missingNums.push(i+1)
        }
    }
    return missingNums
}
console.log(findAllNumbersInArray([4,3,2,7,8,2,3,1]))
//space O(1)
//runtime O(n)
