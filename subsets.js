//Objective is, given a set of distinct integers, return all possible subsets.

let nums = [1,2,3]


//O(N*2^N) solution that has no if condition when backtracking

let temp = []
let index = 0
let result = []

backtrack(temp, index)

function backtrack(temp, index) {
    result.push([...temp])

    for (let i = index; i < nums.length; i++) {
        backtrack([...temp, nums[i]], i + 1)
    }
}

return result