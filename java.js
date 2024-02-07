/*
20. Valid Parentheses
Easy
Topics
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/


// var isValid = function(s) {
  
//     let stack = []

//     for (let i = 0; i < s.length; i++) { 
//         let char = s[i]
//         if (char === '(' || (char === '{') || (char === '[') ) stack.push(char)
//         else { 
//             if (stack.length === 0) return false
//             let top = stack.pop()
//             if (s[i] === ')' && top !== '(') return false
//             if (s[i] === '}' && top !== '{') return false
//             if (s[i] === ']' && top !== '[') return false

//         }
//     }

//     return stack.length === 0

// };

// let s = "()[]{}"
// console.log(isValid(s))




/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]



*/

// var twoSum = function(nums, target) {

//     const emptyArr = []
//     //first iterate each numbers
//     for (let i = 0; i < nums.length; i++) { 
//         const num = nums[i]
//     for (let j = i + 1; j < nums.length; j++) { 
//         if (num + nums[j] === target) { 
//             emptyArr.push(i,j)
//         } 
//     }

// }
// return emptyArr


// this is hash solution which is really hard to understand but keep it here anyway

// let hashTable = {}

// for (let i = 0; i < nums.length; i++) { 

//     const complement = target - nums[i]


//     if (complement in hashTable) { 
//         return [hashTable[complement],i]
//     }

//     hashTable[nums[i]] = i
// }

// };



// nums = [2,7,11,15], target = 9
// console.log(twoSum(nums,target))



/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

*/

// var setZeroes = function(matrix) {
//     const rows = new Set()
//     const cols = new Set()

//     // so when you iterate twice as a nested loop first one is row and second one is columns
//     // so if value is equal to zero you can easily point it is row and column to zero

//     for (let i = 0; i < matrix.length; i++) { 
//         for (let j = 0; j < matrix[i].length; j++) { 

//             if (matrix[i][j] == 0) {
//                 rows.add(i)
//                 cols.add(j)
//             }
//         }
//     }

//     console.log(rows,cols)

//     // after that you loop one more time over rows and columns
//     //so since row is 1 and cols is 1, every element in the second row matrix[1][j] where j is 0, 1 ,2 will be set to 0
//     //the second col is where j is 1, every elemen in the second column matrix[i][1] where i is 0,1 ,2 will be set to 0

//     for (let i = 0; i < matrix.length; i++){ 

//         for (let j = 0; j < matrix[i].length; j++) { 
          
//              if (rows.has(i) || cols.has(j)) { 
//                 matrix[i][j] = 0
//              }
              
//         }
//     }



//     return matrix
// };
// console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))




/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/


var groupAnagrams = function(strs) {
   const map = new Map()
   
   // use hash map method 

   //first sort word and use them as a key

    for (let str of strs) { 
      const sorted = str.split('').sort().join("")
    
      // after sorted you can use sorted as a key and put the value inside array 

      if (!map.has(sorted)) { 
        map.set(sorted,[])
      }
        map.get(sorted).push(str)
    
    }    

    return Array.from(map.values())
    // finally return values inside array as an array

}



console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))