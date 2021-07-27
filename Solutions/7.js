function Problem7(x) {
    function reverse(k) {
    let myString = String(k);
    let n = myString.length;
    if (myString[0] === '-') {
      let newString = myString.replace('-', '');
      let myArray = [];
      for (let i = n-1; i >= 0; i--) {
      myArray.push(newString[i]);
    }
      let lastString = '-' + myArray.toString().replaceAll(',', '');
      return Number(lastString);
    }
    else {
      let myArray = [];
    for (let i = n-1; i >= 0; i--) {
      myArray.push(myString[i]);
    }
    return Number(myArray.toString().replaceAll(',', ''));
    }
  };
    if (reverse(x) > (2**31) - 1 ||  reverse(x) < -(2**31)) {
      return 0;
    }
    else {
      return reverse(x);
    }
  };