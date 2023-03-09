function ContainsDuplicate(arr){
    let res = {}
    for(let i = 0; i < arr.length; i++){
        if(res[arr[i]]===0){
            return true
        }else {
            res[arr[i]] = 0
        }
    }
    return false
}

console.log(ContainsDuplicate([1,2,3,1]))
