//Problem 231 => Power of Two

// time limit exceeds for higher values (1073 / 1108 test cases passed.)
function isPowerOfTwo(n) {
    for (let x = 0; x < n; x++) {
      if (n === 2**x) {
        return true;
      }
      else {
        continue;
      }
    }
    return false;
  } 

  // time limit exceeds for higher values (1085 / 1108 test cases passed.)
  function isPowerOfTwo2(n) {
    if (n === 1) {
      return true;
    }
    else {
      if (n % 2 === 0) {
        for (let x = 0; x < n; x++) {
      if (n === 2**x) {
        return true;
      }
      else {
        continue;
      }
    }
    return false;
      }
      else {
       return false; 
      }
    }
  } 
  
   //accepted
  function isPowerOfTwo3(n) {
    if (n === 0) {
      return false;
    }
    else {
      for (; n != 1; n = n/2) {
    if (n%2 !== 0) {
      return false;
    }
    else {
      continue;
    }
  }
    return true;
    }
  }