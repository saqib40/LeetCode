//remove space at the end of string
function modify(s) {
    let result = s;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ' ') {
        result = result.slice(0, i);
      }
      else {
        return result;
      }
    }
  }
  
  
  function lengthOfLastWord(s) {
    let n = modify(s).length - 1;
    let result = 0;
    for (let i = n; i >=0; i--) {
      if (modify(s)[i] !== ' ') {
        result++;
      }
      else {
        break;
      }
    }
    return result;
  }