function problem(digits) {
    let a = BigInt(digits.join(''));
    let b = a + 1n;
    return String(b).split('');
  };