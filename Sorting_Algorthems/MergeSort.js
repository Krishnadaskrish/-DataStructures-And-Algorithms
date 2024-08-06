function mergeSort(arr){
   if(arr.length<2){
    return arr
   }

   const mid = Math.floor(arr.length/2)
   const leftAarray = arr.slice(0,mid) 
   const rightArray = arr.slice(mid)
   return merge(mergeSort(leftAarray),mergeSort(rightArray))
}

function merge(leftAarray,rightArray){
    const temp = []
    while(leftAarray.length && rightArray.length){
        if(leftAarray[0]<=rightArray[0]){
            temp.push(leftAarray.shift())
        }else{
            temp.push(rightArray.shift())
        }
    }
     return [...temp,...leftAarray,...rightArray]
}

const arr = [
    7, 5, 4, 4,
    3, 2, 2, 1
  ]

  console.log(mergeSort(arr))
