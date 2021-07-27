function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      let a = target - nums[i];
      if (nums.indexOf(a) !== -1 && nums.indexOf(a) !== i) {
        let b = [nums.indexOf(a), i];
        return b;
      }
      else {
        continue;
      }
    }
};