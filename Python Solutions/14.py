#Method 1; Time complexity; O(n^2)
def comparison(strs):
    if len(strs) == 1:
        return strs[0]
    else:
        #To compare two strings
        def comaprisonB(a,b):
          answer = ''
          i = 0
          if (len(a)>len(b)):
            shorter = b
            longer = a
          else:
            shorter = a
            longer = b
          while (i < len(shorter)):
            if shorter[i] == longer[i]:
               answer += shorter[i]
               i += 1
            else:
               break
          return answer
        answer = comaprisonB(strs[0],strs[1])
        i = 2
        while (i < len(strs)):
            if comaprisonB(answer,strs[i]) == '':
                return ''
            else:
                answer = comaprisonB(answer,strs[i])
                i += 1
    return answer

