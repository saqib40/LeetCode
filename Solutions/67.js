function problem(a, b) {
//converting binary to decimal
function binaryToDecimal(n) {
  let dec_value = BigInt(0);
  let base = BigInt(1); //initializing base
  let len = n.length;
  for (let i = len - 1; i >= 0; i--) {
  dec_value += BigInt(n[i]) * base;
  base *= 2n;
  }
  return dec_value;
    };

//converting decimal to binary
function decimalToBinary(n) {
let res = '';
let num = BigInt(n);
while(num) {
res += String(num%BigInt(2));
num = num/BigInt(2);
}
function reverse(k) {
let myString = String(k);
let n = myString.length;
  let myArray = [];
for (let i = n-1; i >= 0; i--) {
  myArray.push(myString[i]);
}
return myArray.toString().replaceAll(',', '');
};
return reverse(res);
};

let m = binaryToDecimal(a) + binaryToDecimal(b);
return decimalToBinary(String(m));
}