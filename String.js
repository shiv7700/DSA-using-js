//String Questions

// Question 1 : reverse a string
// blame => emalb
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

//using recursion
function reverseRecursion() {}

const r1 = reverse("blame");
r1;

//Question 2 : find length of a string
function stringLength(str) {
  return str.length;
}

const str1 = stringLength("blame pro gamer");
str1;

// Question 3 : check if given string is Palindrome or not
// str => rts not a Palindrome
// sts => sts Palindrome
function palindromeString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return str === result ? "Palindrome string" : "not Palindrome";
}

const str2 = palindromeString("gpg");
str2;

// Question 4 : remove vowels from string
//vowels = aeiou
// "blame" => "blm"
function removeVowel(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (!"aeiouAEIOU".includes(currentLetter)) {
      result = result + currentLetter;
    }
  }
  return result;
}

const str3 = removeVowel("blame");
str3;

// Question 5 : remove constaunt from

// Question 6 : truncate text
//Truncating text means shortening it to a specified length.
//replace the text of a string after a certain length with ...
// "this text is a truncate text example" => "this text is a ..."
function truncateText(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
}

const str4 = truncateText("subscribe to ", 9);
str4;

// Question 7 : reverse a number as string
// 112 => "112" => 112
function reverse(x) {
  let str = x.toString();
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  let final = Number(result);
  return x === final ? true : false;
}

const str5 = reverse(121);
str5;

// Question 8 : sort an string
// "dcba" => "abcd"
function sortString() {}

// Question 9 : valid anagram
// "rat" => "cat" false
// "listen" => "silent"
function anagram1(str1, str2) {
  if (str1.length !== str2.length) return -1;
  str1 = str1.split("").sort().join();
  str2 = str2.split("").sort().join();
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

const str6 = anagram1("listen", "silent");
str6;

function validAnagram(s1, s2) {
  if (s1.length !== s2.length) return -1;
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s1.length; i++) {
    obj1[s1[i]] = (obj1[s1[i]] || 0) + 1;
    obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] != obj2[key]) return false;
  }
  return true;
}

const str7 = validAnagram("ghj", "dsa");
str7;
