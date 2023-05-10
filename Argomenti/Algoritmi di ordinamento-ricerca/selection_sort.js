let a = [5, 8, 7, 2, 1, 3];

function selection_sort(array, l = array.length, i = 0) {
  while (i < l - 1) {
    let min = i;
    for (let j = i; j < l; j++) 
      if (array[min] > array[j]) min = j;
    swap(array, min, i)
    i++;
  }
}

const swap = (array, first_index, second_index) => [array[first_index], array[second_index]] = [array[second_index], array[first_index]];

selection_sort(a)
console.log(a)