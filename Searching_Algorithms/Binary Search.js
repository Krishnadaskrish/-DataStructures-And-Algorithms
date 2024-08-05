// binary search only implement for sorted array if the array is not sorted seach after the arry sort 

function BinarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length-1

    while(leftIndex <= rightIndex){
        let middileIndex = Math.floor((leftIndex+rightIndex/2))

        if(target === arr[middileIndex]){
            return middileIndex
        }
        if(target < arr[middileIndex]){
            rightIndex = middileIndex-1
        }else{
            leftIndex = middileIndex + 1
        }
        
    }

    return -1
}

console.log(BinarySearch([2,4,7,8,19,15],15))