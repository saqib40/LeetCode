def mine(arr):
    answer = [1]
    i = 0
    while (i < len(arr) - 1):
        answer.append(arr[i] + arr[i+1])
        i += 1
    answer.append(1)
    return answer

def generate(numRows):
    ans = [[1]]
    updation = [1]
    for x in range(numRows-1):
        y = mine(updation)
        ans.append(y)
        updation = y
    return ans

#in a single function
def generateSingle(numRows):
    ans = [[1]]
    arr = [1]
    for x in range(numRows - 1):
        # From here
        answer = [1]
        i = 0
        while(i < len(arr) - 1):
            answer.append(arr[i] + arr[i+1])
            i += 1
        answer.append(1)
        # till here generates a row
        ans.append(answer)
        arr = answer
    return ans