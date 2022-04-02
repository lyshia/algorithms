/* https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.
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
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists. */

let twoSum = (nums, target) => {
// create array to store the index of the numbers 
 let targetIndex = []

 //loop through nums array to find the target
 // first loop is for the first number
 for (let i = 0; i < nums.length; i ++) 
 {
    // second loop checks the other numbers
    for (let j = 0; j < nums.length; j ++)
    {
        //if the target exists, push to targetIndex
        if (i != j && nums[i] + nums[j] === target)
        {
            targetIndex.push(i)
            targetIndex.push(j)  
            return targetIndex;  
        }
    }
 }

};

let nums = [2,7,11,15], target = 9

console.log(twoSum(nums, target))