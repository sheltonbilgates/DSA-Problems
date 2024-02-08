// 1493. Longest Subarray of 1's After Deleting One Element

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
    if(!nums.includes(1)) return 0
    const zeroindexes = nums.reduce((acc, item, index) => {
        if(!item) acc.push(index + 1)
        return acc
    }, [0])
    zeroindexes.push(nums.length + 1)

    if(zeroindexes.length === 2) return nums.length - 1
    const result = zeroindexes.reduce((acc, item, index) => {
        if (zeroindexes[index + 1] && ((zeroindexes[index + 1] - item) > acc)) acc =  zeroindexes[index + 1] - item - 1
        if (zeroindexes[index + 2] && ((zeroindexes[index + 2] - item - 2) > acc)) acc =  zeroindexes[index + 2] - item - 2
        return acc
    }, 0)

    return result
};

let nums = [1,1,0,1]
console.log(longestSubarray(nums));