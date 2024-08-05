function recursiveBinarySearch(arr , target){
      return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let middileIndex = Math.floor((leftIndex+rightIndex)/2)
    console.log(middileIndex,'ll')
    
    if(target === arr[middileIndex]){
        return middileIndex
    }
    if(target<arr[middileIndex]){
        return (arr,target,leftIndex,middileIndex-1)
    }
    else{
        return search(arr,target,middileIndex+1,rightIndex)
    }

}

console.log(recursiveBinarySearch([4,6,8,10,12,14],14))

//Big-o O(logn)