function romanToInt(s) {
    let v = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
      
    // put values from 2nd array and get corresponding values from ist array
    function stepB(m) {
      return v[n.indexOf(m)];
    };
      
      let integer = 0;
      for (let i = 0; i < s.length; i++) {
    if (n.indexOf(s.slice(i, i+2)) !== -1) {
    integer += stepB(s.slice(i, i+2));
      i++; // to skip extra iteration
    }
    else {
      integer += stepB(s.slice(i, i+1));
    }
    };
      return integer;
    };