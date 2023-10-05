//Basic Questions

// Question 1 : check if given number is even or odd number 
// 2 is even 
// 4 is odd
function evenOdd(num){
    return (num%2===0) ? "even" : "odd";
}

// Question 2 : given number is positive,negative or zero
function num(n){
    if(n===0) {
        return 0;
    } else if(n>0){
        return 1;
    } else if(n<0){
        return -1;
    }
}

const num1 = num(0);
num1;

const even = evenOdd(10);
console.log(even);

// Question 3 : swap two variables
// a=10 b=20 => a=20 b=10

let a = 10;
let b = 20;

// using destructing 
[a,b] = [b,a];

// using temp variable
let temp;
temp = a;
a = b;
b = temp;

// without using third variable
a = a+b;
b = a-b;
a = a-b;

// Question 4 : factorial of a number
// n=5 => 5x4x3x2x1 , n=-5 => -1 , n=0 => 1
function factorial(num){
    let result = 1;
    if(num>=0){
        for(let i=1; i<=num; i++) {
            result = result * i; 
        }
    } else {
        return -1;
    }

    return result;
}

const fact = factorial(1);
fact;

// Question 5 : sum of all natural numbers to a given number
// natural numbers => numbers from 1 to infinity
// whole numbers => numbers from 0 to infinity
// 100 => sum of all numbers to 100
function naturalNumber(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}

const natural = naturalNumber(100);
natural;

// Question 6 : sum of even natural numbers to a given number
// 100 => sum of all natural even numbers to 100
function evenNaturalNumbers(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        if(i%2===0) sum = sum + i;
    }
    return sum;
}

const evenNatural = evenNaturalNumbers(100);
evenNatural;

// Question 7 : sum of odd natural numbers
// 100 => sum of all natural odd numbers to 100
function oddNaturalNumber(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        if(i%2!==0) sum = sum + i;
    }
    return sum;
} 

const odd = oddNaturalNumber(100);
odd;


// Question 8 : fibonacci series 
// 0 1 1 2 3 5 .....
function fibonnaciSeries(n){
   let a =0;
    let b =1;
    let c;
    console.log(a);
    console.log(b);

    for(let i=1; i<=n; i++){
        c = a+b;
        a = b;
        b = c;
        console.log(c);
    }
}

// Question 9 : check if given year is leap year or not
// a year having 365 days is called as normal year
// a year having 366 days is called as leap year (one day extra in feb)
function leapyear(year){
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                return true;
            } else {
                return false;
            }
        } else{
            return true;
        }
    } else {
        return false;
    }
}

const year = leapyear(2023);
year;

// Question 10 : a power of b
// 2^3 = 2x2x2
function power(base,power){
    let result = 1; 
    for(let i=1; i<=power; i++){
        result = result * base; 
    }
    return result;
}

const pow = power(2,3);
pow;

// Question 11 : check if given number is prime or not
// any number that is only divisible by 1 and itself
// 4 is not prime , 5 is prime
function prime(num){
    let check = 0;
    if(num<=1){
        return 0;
    } else {
        for(let i=2; i<num; i++){
            if(num%2===0){
            check = check+1;
            break;
            }
        }
    }
    return check===0 ? true : false;
}

const check = prime(13);
check;

// Question 12 : reverse a given number
function reverse(n){
    let reverse = 0;
    let digit;
}



