function palindrome(x) {
    let newStr = String(x);
    let n = newStr.length;
    function reverse(str) {
      let newStr = String(str);
    let myArray = [];
    let n = newStr.length;
    for (let i = n-1; i >= 0; i--) {
      myArray.push(newStr[i]);
    }
    return myArray.join('');
  }
    for (let i = 0; i < n; i++) {
    if (newStr[i] !== reverse(x)[i]) {
      return false;
    }
      if (newStr[i] === reverse(x)[i]) {
        if (i < n-1) {
          continue;
        }
        if (i === n-1) {
          return true;
        }
      }
    }
  }