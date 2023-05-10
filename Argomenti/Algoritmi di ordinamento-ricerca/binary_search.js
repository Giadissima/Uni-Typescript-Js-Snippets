a = [ 1, 2, 3, 5, 7, 8 ];

function binary_search(a, k, left = 0, right = a.length - 1) {
  while(left<=right){
    middle = Math.round((left + right)/2);
    if(a[middle] == k){
      return middle;
    } else if(a[middle] > k){
      right = middle - 1;
    } else{
      left = middle + 1;
    }
  }
  return NaN
}

console.log(binary_search(a, -2));

function rec_binary_search(a, k, left = 0, right = a.length - 1) {
  if(left > right) return NaN;
  middle = Math.round((left + right)/2);
  if(a[middle] == k){
    return middle;
  } 
  let res = NaN;
  if(a[middle] > k){
    right = middle - 1;
    res = rec_binary_search(a, k, left, right);
  } else{
    left = middle + 1;
    res = rec_binary_search(a, k, left, right);
  }
  return res;
}

console.log(rec_binary_search(a, 2));
