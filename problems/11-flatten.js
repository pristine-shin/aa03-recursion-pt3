/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
console.log(flatten([[1, 2], [3, [4, 5]]])) //[1, 2, 3, 4, 5]
console.log(flatten([[[[]]]]), []) // [];

i want to destructure each time?
***********************************************************************/

// function flatten(arr) {
//   if (arr.length === 0) {
//     return arr
//   }
//   if (!Array.isArray(arr[0])) {
//     return [arr[0], ...flatten(arr.slice(1))];
//   } else {
//     return [...flatten(arr[0]), ...flatten(arr.slice(1))]
//   }
// }

//Alex's solution:
function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (Array.isArray(item)) {
      result.push(...flatten(item))
    } else {
      result.push(item)
    }
  }
  return result;
}
// let arr = [[1, 2], [3, [4, 5]]]
// console.log(...arr)
// debugger
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
console.log(flatten([[1, 2], [3, [4, 5]]])) //[1, 2, 3, 4, 5]
console.log(flatten([[[[]]]])); // [])

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
