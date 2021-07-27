function intToRoman (num) {
    let v = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  
  // put values from ist array and get corresponding values from 2nd array
  function stepB(number) {
    return n[v.indexOf(number)];
  }
  
  //To find the highest number in array(v) that is less than or equal to given number
  function stepA(number) {
    for (let i = v.length; i >= 0; i--) {
      if (v[i] <= number) {
        return v[i];
      }
    }
  }
    let roman;
    for (; num >= 0;) {
      roman += stepB(stepA(num));
      num -= stepA(num);
    }
    return roman.replaceAll('undefined', '');
  };