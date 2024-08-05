// swapping in accenting order
function BubbleSort(arr){
    let swapped ;
    do{
        swapped = false 
        for(let i = 0 ; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
}
const arr = [8,9,6,5,3,6]
BubbleSort(arr)
console.log(arr)

// swapping in decenting order 

function decBubbleSort(arr){
    let swapped 
    do{  
        swapped = false 
        for(let i = 0 ; i<arr.length-1 ; i++){
            if(arr[i]<arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true

            }
        }
    }while(swapped)
}

const arr1 = [8,9,6,5,3,6]
decBubbleSort(arr1)
console.log(arr1)

// big-O = O(n^2) this is why we're saying bubble sort is nor an goo method for sorting 
