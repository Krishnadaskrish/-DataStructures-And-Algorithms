// Linear Search we can use sorted or unsorted arrays 

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const arr = [3,5,3,5,7,89,3]
const target = 7
console.log(LinearSearch(arr,target))
