function product(arr, element) {
  let product = 1;
  const index = arr.indexOf(element);
  for (let i = 0; i < index; i++) {
    product = product * arr[i];
  }
  for (let i = index + 1; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
}

console.log(product([1, 2, 3, 4, 5], 1));

function prod(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        product = product * arr[i];
      }
    }
    result.push(product);
  }
  return result;
}

console.log(prod([1, 2, 3, 4, 5, 6]));
