//to check if any string is empty (because there arises problem)
function checkEmptyString(strs) {
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] !== '') {continue;}
        else if (strs[i] === '') {return true;}
    }
    return false;
}

//for an array containing n strings
function longestCommonPrefix(strs) {
    if (strs.length === 1) {
        return strs[0];
    }
    else {
        if (checkEmptyString(strs) === true) {
            return '';
        }
        else {
            let commonPrefix = '';
        let i = 0;
        while (strs[0][i] === strs[1][i] && strs[0][i] !== undefined) {
            commonPrefix += strs[0][i];
            i++;
        }
for (let k = 2; k < strs.length; k++) {
    let commonPrefixB = '';
    let g = 0;
         while (commonPrefix[g] === strs[k][g] && commonPrefix[g] !== undefined) {
             commonPrefixB += commonPrefix[g];
             g++
         }
         commonPrefix = commonPrefixB;
}
return commonPrefix;
        }
    }
}