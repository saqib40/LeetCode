"""Method 1; Converting to string;
Can be optimized by running the loop till half
only but that won't make much of a difference"""
def isPalindrome(x):
    a = str(x)
    n = len(a) - 1
    b = ''
    while(n>=0):
        b += a[n]
        n -= 1
    return True if a == b else False

#Method 2; Without converting to string