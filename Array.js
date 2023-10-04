//Arrays Questions

//Don't use inbuilt functions like map,reduce,filter etc , these are pure dsa questions use loops and other things

//Question 1 : sum of array
// [0,1,1,1] => sum = 3
function sumOfArray(arr) {
  if (arr.length === 0) return "invalid array";
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const result = sumOfArray([1, 2, 3, 4]);
console.log(result);

//Question 2 : product of array
// [0,4,3,2] => product = 0
function productOfArray(arr) {
  if (arr.length === 0) return "invalid array";
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  }
  return sum;
}

const result2 = productOfArray([1, 2, 3, 4, 0]);
console.log(result2)

//Question 3  : reverse array
// [1,2,3,4,5] => [5,4,3,2,1]
function reverseArray(arr) {
  if (arr.length === 0) return "invalid array";
  const reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}

const result3 = reverseArray([1, 2, 3, 4, 5]);
console.log(result3)

//Question 4 : increase array element by two
// [1,2,3,4,5] => [2,4,6,8,12]
function increaseByTwo(arr) {
  if (arr.length === 0) return "invalid array";
  const double = [];
  for (let i = 0; i < arr.length; i++) {
    double.push(arr[i] * 2);
  }
  return double;
}

const result4 = increaseByTwo([1, 2, 3, 4, 5, 6]);
console.log(result4)

//Question 5 : largest element in array
// [1,3,5,7,9] => largest = 9
//wrong way
function largestArrayWrong(arr) {
  const result = arr.sort((a, b) => a - b);
  const ans = result[arr.length - 1];
  return ans;
}

const worngWay = largestArray([1, 5, 3, 76, 54]);
console.log(worngWay)

//correct way
function largestArray(arr) {
  if (arr.length === 0) return "invalid array";
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

const result5 = largestArray([1, 2, 3, 10, 4, 5, 6]);
console.log(result5)

//Question 6 : smallest element in array
// [5,3,1,7] => smallest = 1
function smallestArray(arr) {
  if (arr.length === 0) return "invalid array";
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  return smallest;
}

const result6 = smallestArray([1, 2, 3, 10, -1, 4, 5, 6]);
console.log(result6)

//Question 7 : find an element in array
// [10,20,30,40,50] => 20 at index 1
function arrayElement(arr, target) {
  if (arr.length === 0) return "invalid array";
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
}

const result7 = arrayElement([1, 2, 3, 4, 5, 6], 5);
console.log(result7)

//Question 8 : remove duplicate values from array
// [1,2,3,1,2,3] => [1,2,3]
const arr = [1, 2, 3, 1, 2, 3];

//method one
function removeDuplicateTwo(arr) {
  const result = new Set(arr);
  // const resultArray = [...result];
  const resultArray2 = Array.from(result);
  return resultArray2;
}

const resultOne = removeDuplicateTwo(arr);
console.log(resultOne)

//method two
function removeDuplicate() {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }

  return result;
}

const result8 = removeDuplicate([1, 2, 3, 1, 2, 3, 1, 2, 3]);
console.log(result8)

//Question 9 : second largest element in array
// [10,20,30,40] => secondlargest = 30
// [10,20,30,40,40] => secondLargest = 30
//wrong way
function secondSmallestWrong(arr) {
  const unique = Array.from(new Set(arr));
  unique.sort((a, b) => a - b);
  const second = unique[unique.length - 2];
  return second;
}

const secondWrong = secondSmallestWrong([4, 6, 3, 8, 9, 1]);
console.log(secondWrong)

//correct way
function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const secondCorrect = secondLargest([2, 5, 3, 7, 9, 9, 7, 6]);
console.log(secondCorrect)

//Question 10 : second smallest element in array
// [10,20,30,40] => secondSmallest = 20
// [10,10,20,30,40] => secondSmallest = 20
function secondSmallest(arr) {
  let smallest = Number.POSITIVE_INFINITY;
  let secondSmallest = Number.POSITIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] != smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

const smallest = secondSmallest([5, 4, 1, 7, 8, 9, 1, 4]);
console.log(smallest)

//Question 11 : count how many times every element in array occurs
//frequency counter
// [10,10,30,40,50] => { 10:2 , 30:1 , 40: 1 , 50: 1 }
function frequencyCounter(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (result[element] === undefined) {
      result[element] = 1;
    } else {
      result[element]++;
    }
  }
  return result;
}

const frequencyOne = frequencyCounter([1, 2, 3, 3, 2, 1]);
console.log(frequencyOne)

//Question 12 : find missing element in array
// [10,20,30,40] => no missing element
// [10,20, , 30] => missing element at index 2
function missingNumber(arr) {
  if (arr.length === 0) return "invalid array";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      return `empty element at index ${i}`;
    }
  }
  return "no element is missing";
}

const missing = missingNumber([10, 20, 30, 40]);
console.log(missing)

//Question 13 : product of array element except itself
// [1,10,0,2] => [0,0,20,0]
function productExcept(arr) {
  const n = arr.length;
  let result = [];
  let product = 1;

  for (let i = 0; i < n; i++) {
    result[i] = product;
    product *= arr[i];
  }

  product = 1;

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= product;
    product *= arr[i];
  }

  return result;
}

const prod1 = productExcept([1, 2, 3, 4, 5]);
console.log(prod1)

//Question 14 : check if two arrays are equal or not
// [10,20,30,40] [10,20,30,40] => true
// [10,20,30,40] [10,20,30,50] => false
function equalArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return -1;
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
}

const equal = equalArray([10, 20, 30, 40], [10, 20, 30, 50]);
console.log(equal)

//Question 15 : remove element from array at specific index
//also all occurance of that element
// [1,2,3,4,5] => remove 2 => [1,3,4,5]
// [1,2,3,4,5,2,2] => remove 2 => [1,3,4,5]

//wrong way (delete array method leaves undefined holes in array)
function removeElement1(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) delete arr[i];
  }
  return arr;
}

const remove1 = removeElement1([4, 1, 2, 4, 3, 4, 5], 4);
console.log(remove1)

//correct way
function removeElement(arr, element) {
  const result = [];
  if (arr.includes(element)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== element) result.push(arr[i]);
    }
    return result;
  } else {
    return `${element} is not found in ${arr}`;
  }
}

const remove = removeElement([1, 2, 3, 4, 5], 3);
console.log(remove);

// Question 16 : merge two array into a new array
// [1,2,3,4] 
// [6,7,8,9]
// => [1,2,3,4,6,7,8,9]
function merge(arr1,arr2){
  let result = [];
  for(let i=0; i<arr1.length; i++){
      result.push(arr1[i]);
  }
  
  for(let i=0; i<arr2.length; i++){
      result.push(arr2[i]);
  }

  return result;
}

const os = merge([1,2,3],[4,5,6]);
os;

function merge1(arr1,arr2){
  return arr1.concat(arr2);
}

const os2 = merge1([1,2,3],[4,5,6]);
os2;

function merge3(arr1,arr2){
  return [...arr1,...arr2];
}

const os3 = merge3([1,2,3],[4,5,6])
os3;

function merge4(arr1,arr2){
  let result = arr1.push(arr2);
}

// copy for questions
//Question 12 : count how many times every element in array occurs
