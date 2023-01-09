#Method 1
def lengthOfLastWord(s):
    a = s.strip() #removing whitespace at front and at end
    b = a.split() #converting the modified string into array of strings; seperating at whitespaces
    n = len(b) - 1
    return len(b[n])


#Method 2
def lengthOfLastWord(s):
    answer = 0
    for i in range(len(s)-1, -1, -1):
        if(answer == 0 and s[i] == ' '):
            continue
        elif(answer != 0 and s[i] == ' '):
            break
        else:
            answer += 1
    return answer