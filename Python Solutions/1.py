#Method 1 => Time Limit Exceeded; Time Complexity; O(n^2)
def twoSum(nums, target):
    sum = 0
    for x in nums:
        a = nums.index(x)
        for m in range(a+1, len(nums)):
            sum = x + nums[m]
            if (sum == target):
                answer = [a, m]
                return answer

#Method 2 => Time Complexity; O(n)
def twoSum2(nums, target):
    i = 0
    while(i < len(nums)):
        k = target - nums[i]
        if (k in nums and nums.index(k) != i):
            return [nums.index(k), i]
        else:
            i += 1