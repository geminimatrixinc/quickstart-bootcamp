



function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
     product *= arr[i];
  }
  // Only change code above this line
  return product;
}

//multiplyAll([1, 2, 3, 4, 5]);

//multiplyAll([[1,2],[3,4],[5,6,7]]);



function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  console.log(product);
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);