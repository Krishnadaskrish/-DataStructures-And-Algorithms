function quickSort (arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i = 0 ; i<arr.length-1 ; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        if(arr[i]>pivot){
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}

arr= [3,4,5,4,2,9,10]
console.log(quickSort(arr)) 
