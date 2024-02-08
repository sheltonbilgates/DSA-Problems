// 1004. Max Consecutive Ones III

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time O(N) where N is the number of bits
// Space = O(1).

var longestOnes = function(nums, k) {
    let max = 0;
    let usedFlips = 0;
    let slow = 0;
    
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] === 0)
        {
            if (usedFlips < k)
            {
                usedFlips++;
            } else {
                if(nums[slow] === 0)
                {
                    slow++;
                } 
                else {
                    while(nums[slow] !== 0 && slow <= i)
                    {
                        slow++;
                    }
                    slow++;
                }
            }
        }

        if (slow === i && (nums[i] === 0 && usedFlips < k || nums[i] === 1) )
        {
            max = Math.max(max, 1);
        }
        else
        {
            max = Math.max(max, i - slow + 1);
        }
    }
    
    return max;
};

let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
console.log(longestOnes(nums, k))