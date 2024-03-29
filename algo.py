"""
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
"""

# def isValid(s):

#     stack = []

#     paranthesis_map = { 
#         ')': '(',
#         '}': '{',
#         ']': '['
#     }


#     for char in s:
#         if char not in paranthesis_map:
#             stack.append(char)

#         elif not stack or stack[-1] != paranthesis_map[char]:
#             return False
        
#         else:
#             stack.pop()

#     return True if not stack else False  
#     """return stack.length == 0"""







"""
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
"""



# def setZeros(matrix): 
 
 # if you think row as r and c as cols space complexity can be thought as r and c
 
 # so in the loop it is 2r.c and 2c.r think of it

#     cols = set()
#     rows = set()


#     # here you are keep tracking rows and columns 
#     for i in range(len(matrix)):
#         for j in range(len(matrix[i])):
#             if matrix[i][j] == 0:
#                 rows.add(i)
#                 rows.add(j)


#     for i in range(len(matrix)):
#         for j in range(len(matrix[i])):
#             if i in rows or j in cols:
#                 matrix[i][j] = 0

#     print(matrix)


# setZeros([[1,1,1],[1,0,1],[1,1,1]])






"""Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]"""

# def groupAnagrams(strs):

#     maps =  {}

#     for word in strs:
         
#         # sorted return list of characters for example sorted(eat) will return [a,e,t]

#          sorted_word =  "".join(sorted(word))  # it is opposite of javascript

#          if (not sorted_word in maps):
#               maps[sorted_word] = []   
       

#          maps.get(sorted_word).append(word)
    
#     return list(maps.values())
             

# groupAnagrams(["eat","tea","tan","ate","nat","bat"])





