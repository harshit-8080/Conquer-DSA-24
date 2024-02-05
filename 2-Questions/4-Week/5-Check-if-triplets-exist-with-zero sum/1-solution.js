// BF IDEA --------------------------------

function findTriplets(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          console.log(i, j, k);
          return 1;
        }
      }
    }
  }

  return 0;
}

let x = findTriplets([97, -27, 2, -34, 61, -39], 6);
console.log(x);
