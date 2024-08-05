function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let NumberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < NumberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = NumberToInsert;
  }
}

const arr = [-6, 4, 2, 6, 7];
InsertionSort(arr);
console.log(arr);

//Big-O = O(n^2)
