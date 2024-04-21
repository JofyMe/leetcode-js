//Given an integer x, return true if x is a palindrome and false otherwise.

const isPalindrome = x => {
    const str = x.toString();
    
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    while (leftIndex < rightIndex) {
        if (str[leftIndex] !== str[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    
    return true;
};