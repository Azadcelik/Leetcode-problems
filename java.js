// // // /*
// // // 20. Valid Parentheses
// // // Easy
// // // Topics
// // // Companies
// // // Hint
// // // Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// // // An input string is valid if:

// // // Open brackets must be closed by the same type of brackets.
// // // Open brackets must be closed in the correct order.
// // // Every close bracket has a corresponding open bracket of the same type.
 

// // // Example 1:

// // // Input: s = "()"
// // // Output: true
// // // Example 2:

// // // Input: s = "()[]{}"
// // // Output: true
// // // Example 3:

// // // Input: s = "(]"
// // // Output: false
 

// // // Constraints:

// // // 1 <= s.length <= 104
// // // s consists of parentheses only '()[]{}'.

// // // */


// // // // var isValid = function(s) {
  
// // // //     let stack = []

// // // //     for (let i = 0; i < s.length; i++) { 
// // // //         let char = s[i]
// // // //         if (char === '(' || (char === '{') || (char === '[') ) stack.push(char)
// // // //         else { 
// // // //             if (stack.length === 0) return false
// // // //             let top = stack.pop()
// // // //             if (s[i] === ')' && top !== '(') return false
// // // //             if (s[i] === '}' && top !== '{') return false
// // // //             if (s[i] === ']' && top !== '[') return false

// // // //         }
// // // //     }

// // // //     return stack.length === 0

// // // // };

// // // // let s = "()[]{}"
// // // // console.log(isValid(s))




// // // /*
// // // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// // // You may assume that each input would have exactly one solution, and you may not use the same element twice.

// // // You can return the answer in any order.

 

// // // Example 1:

// // // Input: nums = [2,7,11,15], target = 9
// // // Output: [0,1]
// // // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// // // Example 2:

// // // Input: nums = [3,2,4], target = 6
// // // Output: [1,2]
// // // Example 3:

// // // Input: nums = [3,3], target = 6
// // // Output: [0,1]



// // // */

// // // // var twoSum = function(nums, target) {

// // // //     const emptyArr = []
// // // //     //first iterate each numbers
// // // //     for (let i = 0; i < nums.length; i++) { 
// // // //         const num = nums[i]
// // // //     for (let j = i + 1; j < nums.length; j++) { 
// // // //         if (num + nums[j] === target) { 
// // // //             emptyArr.push(i,j)
// // // //         } 
// // // //     }

// // // // }
// // // // return emptyArr


// // // // this is hash solution which is really hard to understand but keep it here anyway

// // // // let hashTable = {}

// // // // for (let i = 0; i < nums.length; i++) { 

// // // //     const complement = target - nums[i]


// // // //     if (complement in hashTable) { 
// // // //         return [hashTable[complement],i]
// // // //     }

// // // //     hashTable[nums[i]] = i
// // // // }

// // // // };



// // // // nums = [2,7,11,15], target = 9
// // // // console.log(twoSum(nums,target))



// // // /*
// // // Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// // // You must do it in place.

 

// // // Example 1:


// // // Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// // // Output: [[1,0,1],[0,0,0],[1,0,1]]

// // // */

// // // // var setZeroes = function(matrix) {
// // // //     const rows = new Set()
// // // //     const cols = new Set()

// // // //     // so when you iterate twice as a nested loop first one is row and second one is columns
// // // //     // so if value is equal to zero you can easily point it is row and column to zero

// // // //     for (let i = 0; i < matrix.length; i++) { 
// // // //         for (let j = 0; j < matrix[i].length; j++) { 

// // // //             if (matrix[i][j] == 0) {
// // // //                 rows.add(i)
// // // //                 cols.add(j)
// // // //             }
// // // //         }
// // // //     }

// // // //     console.log(rows,cols)

// // // //     // after that you loop one more time over rows and columns
// // // //     //so since row is 1 and cols is 1, every element in the second row matrix[1][j] where j is 0, 1 ,2 will be set to 0
// // // //     //the second col is where j is 1, every elemen in the second column matrix[i][1] where i is 0,1 ,2 will be set to 0

// // // //     for (let i = 0; i < matrix.length; i++){ 

// // // //         for (let j = 0; j < matrix[i].length; j++) { 
          
// // // //              if (rows.has(i) || cols.has(j)) { 
// // // //                 matrix[i][j] = 0
// // // //              }
              
// // // //         }
// // // //     }



// // // //     return matrix
// // // // };
// // // // console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))




// // // /*
// // // Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// // // An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// // // Example 1:
// // // Input: strs = ["eat","tea","tan","ate","nat","bat"]
// // // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// // // */

// // // // var groupAnagrams = function(strs) {
// // // //    const map = new Map()
   
// // // //    // use hash map method 

// // // //    //first sort word and use them as a key

// // // //     for (let str of strs) { 
// // // //       const sorted = str.split('').sort().join("")
    
// // // //       // after sorted you can use sorted as a key and put the value inside array 

// // // //       if (!map.has(sorted)) { 
// // // //         map.set(sorted,[])
// // // //       }
// // // //         map.get(sorted).push(str)
    
// // // //     }    

// // // //     return Array.from(map.values())
// // // //     // finally return values inside array as an array

// // // // }
// // // // console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))





// // // /*
// // // Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// // // Each row must contain the digits 1-9 without repetition.
// // // Each column must contain the digits 1-9 without repetition.
// // // Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// // // Note:
// // // A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// // // Only the filled cells need to be validated according to the mentioned rules.
// // // */


// // // var isValidSudoku = function(board) {
// // //   const rows = Array.from({ length: 9 }, () => new Set());
// // //   const cols = Array.from({ length: 9 }, () => new Set());
// // //   const boxes = Array.from({ length: 9 }, () => new Set());

// // //   for (let i = 0; i < 9; i++) {
// // //       for (let j = 0; j < 9; j++) {
// // //           const num = board[i][j];
// // //           if (num !== '.') {
// // //               const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
// // //               if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
// // //                   return false;
// // //               }
// // //               rows[i].add(num);
// // //               cols[j].add(num);
// // //               boxes[boxIndex].add(num);
// // //           }
// // //       }
// // //   }
// // //   return true;
// // // };



// // // let boards = 
// // // [["8","3",".",".","7",".",".",".","."]
// // // ,["6",".",".","1","9","5",".",".","."]
// // // ,[".","9","8",".",".",".",".","6","."]
// // // ,["1",".",".",".","6",".",".",".","3"]
// // // ,["4",".",".","8",".","3",".",".","1"]
// // // ,["7",".",".",".","2",".",".",".","6"]
// // // ,[".","6",".",".",".",".","2","8","."]
// // // ,[".",".",".","4","1","9",".",".","5"]
// // // ,[".",".",".",".","8",".",".","7","9"]]


// // // console.log(isValidSudoku(boards))





// // // BINARY SEARCH 

// // const funco = (array,target) => { 
// //    let left = 0
// //    let right = array.length - 1

// //    array.sort()
   

// //    while (left <= right) { 
// //      midPoint =   Math.floor((left + right) / 2)
     
// //      if (array[midPoint] === target) return midPoint
// //      else if (array[midPoint] > target) { 
// //         right = midPoint - 1
// //      }
// //      else { 
// //         left = midPoint + 1
// //      }
// //    }
// // }



// // console.log(funco([7,1,2,3,4,5,6,8,8], 7))


// /*
// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num), which returns three possible results:
// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

// Example 1:
// Input: n = 10, pick = 6
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1


// Example 3:
// Input: n = 2, pick = 1
// Output: 1
// */

// // var guessNumber = function(n) {
// //     let left = 0
// //     let right = n

// //     while (left < right) { 
// //         let midPoint = (left + right) / 2 

// //         if (guess[midPoint] === -1) right = midPoint - 1
// //         else if (guess[midPoint] === 1) left = midPoint + 1
// //         else { 
// //             return midPoint
// //         }
// //     }

    
// // };
// // console.log(guessNumber(9))





// /*
// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// */


// var searchMatrix = function(matrix, target) {

    

// };


// matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13

// console.log(searchMatrix(matrix,target))






//LINKED LIST

/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/


// class ListNode { 
//     constructor(val) { 
//         this.val = val,
//         this.next = null
//     }
// }


//  function middleNode (head) { 
//     slow = head
//     fast = head

//     while (fast.next) { 
//         slow = slow.next
//         fast = fast.next.next

//     }
//     return slow
// }



// // Example usage:
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// console.log(middleNode(head).val); // Output: ListNode { val: 3, next: ListNode { val: 4, next: [ListNode] } }



// class ListNode { 
//     constructor(val) { 
//         this.val = val
//         this.next = null
//     }
// }

// class ListNode2 { 
//     constructor(val) { 
//         this.val = val
//         this.next = null
//     }
// }


// const sortedList = (head,head1) => { 
//    let current = head
//    let current1 = head1

//    while (current.next) { 
      
//       current.next = current1
//       current1.next = current.next

//    } 
//     return current
// }


// let head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(4)
// let head1 = new ListNode2(1)
// head1.next = new ListNode2(3)
// head1.next.next = new ListNode2(4)

// console.log(sortedList(head,head1))


