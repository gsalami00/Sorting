function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}
