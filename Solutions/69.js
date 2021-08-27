//Problem 69 => Finding Square root of x (not completed yet)

//using inbuilt functions
function mySqrt1(x) {
    return Math.floor(Math.sqrt(x));
  }
  
  //using inbuilt functions (logarithm)
  function mySqrt2(x) {
    return Math.floor(Math.exp(Math.log(x)/2));
  }
  
  //using newton raphson method
  function mySqrt3(x) {
    if (x === 0) {
      return 0;
    }
    else {
      let guess = x;
    let errorLimit = 0.00001;
    let root;
    while (true) {
      root = (guess + (x/guess))/2;
      if (Math.abs(root - guess) < errorLimit) {
        break;
      }
      guess = root;
    }
    return Math.floor(root);
    }
  }