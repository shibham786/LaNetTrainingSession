// *************** Parscal Triangle ***************************** //

// let nos = prompt("Enter the nos of Row");
// nos = Number.parseInt(nos);
// let parscal = generate(nos);
// parscal.forEach((element) => {
//   console.log(element);
// });
// function generate(nos) {
//   var result = [];
//   if (nos == 0) return result;

//   for (let i = 1; i <= nos; i++) {
//     let row = [];
//     for (let j = 0; j < i; j++) {
//       if (j == 0 || j == i - 1) {
//         row.push(1);
//       } else {
//         row.push(result[i - 2][j] + result[i - 2][j - 1]);
//       }
//     }
//     result.push(row);
//   }

//   return result;
// }

// ***************Bracket Pairing combination******************** */
// const bracket = (n) => {
//   if (n == 0) return 0;
//   var result = [];
//   findAll("(", 1, 0, result, n);
//   return result;
// };
// const findAll = (current, o, c, result, n) => {
//   if (current.length == 2 * n) {
//     result.push(current);
//     return;
//   }
//   if (o < n) findAll(current + "(", o + 1, c, result, n);
//   if (c < o) findAll(current + ")", o, c + 1, result, n);
// };
// let a = bracket(3).length;

// console.log(a);

//***************Roman to Int******************
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// const romToInt = (str) => {
//   var value = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let strr = str.split("");
// };
// romToInt("str");

// *****************************Promise*********************************

// let p1 = new Promise((resoved, reject) => {
//   if (0 > 0) {
//     resoved("First Promis is Resolved.....");
//   } else {
//     reject(new Error("First Promise gets failed....."));
//   }
// }).catch(alert);

// let p2 = new Promise((resoved, reject) => {
//   if (new Date().getFullYear() == 2023) {
//     setTimeout(() => {
//       resoved("Second Promis is Resolved.....");
//     }, 2000);
//   } else {
//     reject(new Error("you are not correct timeZone"));
//   }
// });

// let p3 = new Promise((resoved, reject) => {
//   resoved(10);
// });

// let promise = Promise.any([p1, p2, p3]);

// promise.then((value) => {
//   console.log(value);
// });

//**************************Async And Await**************************/

// const weather = async () => {
//   let suratWeather = new Promise((resoved, reject) => {
//     setTimeout(() => {
//       resoved("little bit Foggy weather");
//     }, 2000);
//   });

//   let vapiWeather = new Promise((resoved, reject) => {
//     setTimeout(() => {
//       resoved("sunny weather");
//     }, 5000);
//   });
//   console.log("Fetching surat's Weather....");
//   let surat = await suratWeather;
//   console.log("Surat's Weather is fetched..: ", surat);
//   console.log("Fetching vapi's Weather....");
//   let vapi = await vapiWeather;
//   console.log("Vapi's Weather is fetched..: ", vapi);
//   return [suratWeather, vapiWeather];
// };
// let a = weather();
// console.log(a);

// let urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
//   .then()
//   .catch("oops");
// const fetchUsers = async () => {
//   try {
//     const [users, posts, albums] = await Promise.all(
//       urls.map((url) => fetch(url).then((res) => res.json()))
//     );
//     users.map((url) => console.log(url));
//     posts.map((url) => console.log(url));
//     albums.map((url) => console.log(url));
//   } catch (e) {
//     console.log("oops something went wrong", e);
//   }
// };
// fetchUsers();
// const sum = (...args) => {
//   return args.reduce((a, b) => a + b) / args.length;
// };
// console.log(sum(3, 3, 3, 4, 4, 4, 5, 5, 5));

// Async Error Handling
// const p = new Promise((resoved, reject) => {
//   var msg = "ha meri jaan";
//   throw new Error("Bhai Lafda ho gaya....");
// });
// p.then((res) => {
//   return [res, msg];
// })
//   .catch((...args) => {
//     alert(args[0]);
//     alert(args[1]);
//     throw new Error("Bhai lafda Sulat gaya");
//   })
//   .catch((err) => {
//     alert(err);
//   });

// Palindrome number
// const isPalindrome = (num) => {
//   arr = [];
//   var n = num;
//   while (num >= 1) {
//     temp = num % 10;
//     num = Math.trunc(num / 10);
//     arr.push(temp);
//   }
//   sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i == arr.length - 1) {
//       sum = sum + arr[i];
//     } else {
//       sum = sum + arr[i];
//       sum = sum * 10;
//     }
//   }
//   return n == sum ? true : false;
// };

//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// const addTwoNumbers = (l1, l2) => {
//   str1 = Number(l1.join(""));
//   str2 = Number(l2.join(""));
//   arr = [...String(str1 + str2)].reverse();
//   console.log(arr);
// };
// addTwoNumbers((l1 = [2, 5, 2]), (l2 = [3, 5, 2]));
// addTwoNumbers((l1 = [2, 4, 3]), (l2 = [5, 6, 4]));
// addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);

// Find the Median of Sorted Arrays......
// const findMedianSortedArrays = (nums1, nums2) => {
//   var nums3 = [...nums1, ...nums2].sort((a, b) => {
//     return a - b;
//   });

//   if (nums3.length == 2) {
//     nums3 = [nums3.reduce((a, b) => a + b)];
//     median = nums3[0] / 2;
//     return median;
//   } else if (nums3.length == 1) {
//     return nums3[0];
//   } else if (nums3.length % 2 == 1) {
//     var mid = Math.trunc(nums3.length / 2);
//     var median = nums3[mid];
//     return median;
//   } else {
//     var mid = Math.trunc(nums3.length / 2);
//     var median = (nums3[mid - 1] + nums3[mid]) / 2;
//     return median;
//   }
//   //   console.log(median);
// };
//*******************ZigZag Conversion******************/
//   const convert = (str, nosRow) => {
//   let diagonal =
//     nosRow % 2 == 0 ? Math.round(nosRow / 2) + 1 : Math.round(nosRow / 2);
//   console.log(diagonal);
//   ansArray = [];
//   tempArray = [];
//   i = 0;
//   strArr = [...str];
//   console.log(strArr);
//   flag = 1;

//   strArr.forEach((element) => {
//     if (tempArray.length < nosRow) {
//       if (tempArray[0] == null && tempArray[nosRow - 2] != null) {
//         tempArray.push(null);
//       } else {
//         tempArray.push(element);
//       }
//     } else {
//       ansArray.push([...tempArray]);
//       tempArray = [];
//       if (ansArray.length % 2 > 0) {
//         tempArray[0] = null;
//       }
//     }
//   });

//   if (tempArray.length <= nosRow) {
//     ansArray.push([...tempArray]);
//   }
//   console.log(ansArray);
//   // newArr = [];
//   // console.log(corss);
//   // strArr.forEach((element) => {});
// };
// convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);

//*******************ZigZag Conversion******************/
// const convert = (str, nosRow) => {
//   let diagonal =
//     nosRow % 2 == 0 ? Math.round(nosRow / 2) + 1 : Math.round(nosRow / 2);
//   console.log(diagonal);
//   ansArray = [];
//   tempArray = [];
//   i = 0;
//   strArr = [...str];
//   console.log(strArr);
//   flag = 1;
//   for (let i = 0; i < strArr.length; i++) {
//     const element = strArr[i];
//     if (tempArray.length < nosRow) {
//       if (tempArray[0] == null && tempArray[nosRow - 2] != null) {
//         tempArray.push(null);
//         i--;
//       } else {
//         tempArray.push(element);
//       }
//     } else {
//       ansArray.push([...tempArray]);
//       tempArray = [];
//       if (ansArray.length % 2 > 0) {
//         tempArray[0] = null;
//         i--;
//       } else {
//         i--;
//       }
//     }
//   }

//   if (tempArray.length <= nosRow) {
//     if (ansArray.length % 2 > 0) {
//       tempArray = tempArray.reverse();
//       ansArray.push([...tempArray]);
//     } else {
//       ansArray.push([...tempArray]);
//     }
//   }
//   console.log(ansArray);
//   i = 0;
//   newArr = [];
//   ansArray.forEach((element) => {
//     if (i % 2 == 0) {
//       newArr.push(element);
//       console.log(newArr);
//     } else {
//       newArr.push(element.reverse());
//       console.log(newArr);
//     }
//     i++;
//   });
//   console.log(newArr);
//   len = newArr.length < newArr[0].length ? newArr[0].length : newArr.length;
//   console.log(len);
//   for (let i = 0; i < newArr.length; i++) {
//     while (newArr[i].length < len) {
//       newArr[i].push(null);
//     }
//   }
//   var origanlStr = [];
//   for (let i = 0; i < newArr[0].length; i++) {
//     for (let j = 0; j < newArr.length; j++) {
//       if (newArr[j][i] != null) {
//         origanlStr.push(newArr[j][i]);
//       }
//     }
//   }
//   console.log(origanlStr.join(""));
// };
// convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);
// convert("PAYPALISHIRING", 3);
// convert("PAYPALISHIRING", 4);
// convert("AB", 1);
// convert("AB", 1);
// convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);
// convert("PAYPALISHIRING", 3);
// convert("PAYPALISHIRING", 4);
// convert("ABC", 3);

// let object = [
//   { flag: 1, a: 1 },
//   { flag: 0, a: 2 },
//   { flag: 1, a: 3 },
// ];
// object.find((obj) => {
//   if (obj.flag === 0) {
//     console.log(`${obj.flag} , ${obj.a}`);
//   }
// });

//***********************romanToInt**************************
// const romanToInt = (res) => {
//   var num = 0;
//   translations = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   s = res;
//   number = 0;
//   s = s.replace("IV", "IIII").replace("IX", "VIIII");
//   s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
//   s = s.replace("CD", "CCCC").replace("CM", "DCCCC");
//   romam = [...s];
//   romam.forEach((element) => {
//     num += translations[element];
//   });
//   console.log(`${num} = ${res}`);
// };
// romanToInt("CMXCIX");

//*************************intToRoman*************************
//   const intToRoman = (nums) => {
//   num = nums;
//   normal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   roman = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];
//   res = "";
//   for (i = 0; i < 13; i++) {
//     while (num >= normal[i]) {
//       res += roman[i];
//       num -= normal[i];
//     }
//   }
//   console.log(` ${res} = ${nums}`);
// };
// intToRoman(999);

//***********************largestSubString***********************
// const largestSubString = (str) => {
//   var ansStrArr = "";
//   let strArr = [...str];
//   let strArr2 = [...str];
//   strArr.forEach((element) => {
//     strArr2.shift();
//     for (let ele of strArr2) {
//       if (element.match(ele)) break;
//       element += ele;
//       ansStrArr = ansStrArr.length < element.length ? element : ansStrArr;
//     }
//   });
//   console.log(`${ansStrArr} ${ansStrArr.length} `);
// };
// largestSubString("pwwkew");

// const largestSubString = (str) => {
//   var ansStrArr = "";
//   let strArr = [...str];
//   let strArr2 = [...str];
//   strArr.forEach((element) => {
//     strArr2.shift();
//     for (let ele of strArr2) {
//       if (element.match(ele)) break;
//       element += ele;
//     }
//     ansStrArr = ansStrArr.length < element.length ? element : ansStrArr;
//   });
//   console.log(`${ansStrArr} ${ansStrArr.length} `);
// };
// largestSubString("pwwkew");

//********************Longest Palindromic Substring********************/
// const longestPalindrome = (str) => {
//   let strArr = [...str];
//   ansArr = [];
//   let dummyArr = [...str];
//   strArr.forEach((element) => {
//     let subStr = "";
//     let reverseElement = "";
//     for (let i = 0; i < dummyArr.length; i++) {
//       const ele = dummyArr[i];
//       subStr += ele;
//       if (element.match(dummyArr[i + 1])) {
//         subStr += dummyArr[i + 1];
//         break;
//       }
//     }
//     dummyArr.shift();
//     reverseElement = subStr.split("").reverse().join("");
//     ansArr.push(subStr == reverseElement ? subStr : null);
//     // console.log(`${subStr} =  ${reverseElement}`);
//   });
//   console.log(ansArr + " " + str);
//   //   return "ansStr = " + ansStr;
// };
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("abccb"));

// -----------------------Es6 String Methods...-----------------------
// str = `   Aliquip consequat sunt eiusmod mollit proident ex esse enim esse fugiat elit. Nisi eu ullamco amet esse deserunt dolore ad voluptate.
// Cillum ex exercitation elit id. Ut elit aute ut enim ad laborum ipsum ipsum eu voluptate voluptate laboris amet.`;

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Demo Image link
// https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented
// by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of
// rain water (blue section) are being trapped.

// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// const trap = (input) => {
//   let ans = 0;
//   checked = [];
//   console.log(input);
//   const maxIndex = input.indexOf(Math.max(...input));
//   console.log(maxIndex);
//   for (let i = 0; i < maxIndex; i++) {
//     for (let j = i; j < maxIndex; j++) {
//       if (input[i] >= input[j]) {
//         if (input[i] > input[j]) {
//           if (!checked.find((element) => element == j)) {
//             ans = ans + (input[i] - input[j]);
//             checked.push(j);
//           }
//         }
//       } else {
//         break;
//       }
//     }
//   }
//   console.log(ans);
//   for (let i = input.length - 1; i > maxIndex; i--) {
//     for (let j = i; j > maxIndex; j--) {
//       console.log(i, j);
//       console.log(input[i], input[j - 1], input[i] > input[j - 1]);
//       if (input[i] > input[j - 1]) {
//         if (!checked.find((element) => element == i)) {
//           console.log(`${ans} + ${input[i]}-${input[j - 1]}`);
//           ans = ans + (input[i] - input[j - 1]);
//           console.log(ans);
//           checked.push(j - 1);
//         }
//       } else {
//         console.log("j got breakdown");
//         break;
//       }
//     }
//   }
//   console.log(ans);
// };

// trap([3, 0, 0, 2, 0, 4]);
// trap([1, 2, 1, 2]);
// trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]);

/*********************************************************/
// const longestValidParentheses = (input) => {
//   strArr = [...input];
//   ansArr = [];
//   console.log(strArr);
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] == "(") {
//       tempStr = "";
//       x = i;
//       while (x < strArr.length) {
//         if (strArr[x] == "(" && strArr[x + 1] == ")") {
//           tempStr += strArr[x];

//           x++;
//         } else if (strArr[x] == ")" && strArr[x + 1] == "(") {
//           tempStr += strArr[x];
//           x++;
//         } else {
//           tempStr += strArr[x + 1];
//           ansArr.push(tempStr);
//           console.log(tempStr);
//           tempStr = "";
//           x = strArr.length;
//         }
//       }
//     }
//   }
//   // ans = ansArr.reduce((str, itrator) => {
//   //   if (
//   //     str.length < itrator.length &&
//   //     itrator != "undefined" &&
//   //     itrator.sptswith("(") &&
//   //     itrator.endswith(")")
//   //   ) {
//   //     str = itrator;
//   //   }
//   //   return str;
//   // });
//   // return ans.length;
//   str = "";
//   ansArr.pop();
//   ansArr.forEach((element) => {
//     if (str.length < element.length) {
//       str = element;
//       console.log(str);
//     }
//   });
//   // return str.length;

//   console.log(str.length);
// };

// const longestValidParentheses = (input) => {
//   strArr = [...input];
//   max = 0;
//   i = 0;
//   for (let i = 0; i < strArr.length; i++) {
//     count = 0;
//     if (strArr[i] == "(") {
//       for (let j = i; j < strArr.length; j++) {
//         curr = strArr[j];
//         next = j + 1 < strArr.length ? strArr[j + 1] : "";
//         prev = j - 1 >= 0 ? strArr[j - 1] : "";
//         if ((curr == "(" && next == ")") || (curr == ")" && prev == "(")) {
//           count++;
//         } else {
//           max = count > max ? count : max;
//           count = 0;
//         }
//       }
//     }
//     max = count > max ? count : max;
//   }
//   return max;
//   // console.log(max);
// };
// // longestValidParentheses(")()())");

// // longestValidParentheses("(()");
// const longestValidParentheses = (str) => {
//   let n = str.length;
//   let stk = [];
//   stk.push(-1);
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     if (str.charAt(i) == "(") {
//       stk.push(i);
//     } else {
//       if (stk.length != 0) {
//         stk.pop();
//       }
//       if (stk.length != 0) {
//         result = Math.max(result, i - stk[stk.length - 1]);
//       } else {
//         stk.push(i);
//       }
//     }
//   }
//   console.log(result);
//   // return result;
// };

// const longestValidParentheses = (str) => {
//   let stack = [];
//   stack.push(-1);
//   let result = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == "(") {
//       stack.push(i);
//     } else {
//       if (stack.length != 0) {
//         stack.pop();
//       }
//       if (stack.length != 0) {
//         result = Math.max(result, i - stack[stack.length - 1]);
//       } else {
//         stack.push(i);
//       }
//     }
//   }
//   console.log(result);
// };
// longestValidParentheses("(())() ");

const stringMultiplication = (num1, num2) => {
  return (BigInt(num1) * BigInt(num2)).toString();
};

stringMultiplication("123456789", "987654321");
// stringMultiplication("21", "9");
// stringMultiplication("9", "21");
// stringMultiplication("111", "2");
// stringMultiplication("2", "111");

// Array Challenge
/*Have the function ArrayChallenge(arr) take the array of numbers stored in arr and first determine the largest element in the array,
  and then determine whether or not you can reach that same element within the array by moving left or right continuously according to
  whatever integer is in the current spot. If you can reach the same spot within the array, then your program should output the least
  amount of jumps it took.
  For example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is and if you jump 6 spaces to
  the right while looping around the array you end up at the last element where the 1 is. 
  Then from here you jump 1 space to the left and you're back where you started, so your program should output 2. 
  If it's impossible to end up back at the largest element in the array your program should output -1. 
  The largest element in the array will never equal the number of elements in the array. The largest element will be unique.*/
// Examples
// Input: [1,2,3,4,2]
// Output: 3
// Input: [1,7,1,1,1,1]
// Output: 2

// const ArrayChallenge = (arr) => {
//   max = Math.max(...arr);
//   arr.filter((count) => {});
// };
// ArrayChallenge([2, 3, 5, 6, 1, 6]);
// ArrayChallenge([1, 2, 3, 4, 2]);
// ArrayChallenge([1, 7, 1, 1, 1, 1]);
// Array Challenge
// Have the function ArrayChallenge(strArr) take the array of strings stored in strArr and return the third largest word within it. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.
// Examples
// Input: ["coder","byte","code"]
// Output: code
// Input: ["abc","defg","z","hijk"]
// Output: abc

// const ArrayChallenge = (strArr) => {
// lengthArr = [];
// ansArr = [];
// len = 0;
// strArr.forEach((element) => {
//   lengthArr.push(element.length);
// });
// lengthArr = lengthArr.sort();
// if (lengthArr.length < 3) {
//   len = lengthArr[lengthArr.length - 1];
// } else {
//   len = lengthArr[lengthArr.length - 3];
// }
// strArr.forEach((element) => {
//   if (element.length == len) {
//     ansArr.push(element);
//   }
// });
// if (ansArr.length < 3) {
//   return ansArr[ansArr.length - 1];
// } else {
//   return ansArr[2];
// }
//   strArr.sort((a, b) => b.length - a.length);
//   return strArr[2];
// };

// console.log(ArrayChallenge(["1", "22", "32", "4444", "11"]));
// console.log(ArrayChallenge(["ac", "ccc", "vv", "4444", "11"]));
// ArrayChallenge(["11", "2", "123", "2", "21"]);
