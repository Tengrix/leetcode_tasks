function missingNumber(nums) {
    return nums.reduce((acc, curr, i) => acc + i + 1 - curr, 0)
};
console.log(missingNumber([0,1]));

//space O(1)
//runtime O(n)
