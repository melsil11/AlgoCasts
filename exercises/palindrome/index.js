// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {   
    // i is for index 
    // not ideal solution but gives you something to talk about with the interviewer
    return str.split('').every(( char, i) => {
        return char === str[str.length - i - 1];
    });
}
module.exports = palindrome;


// easy solution 
// function palindrome(str) {   
//     const reversed = str.split('').reverse().join('');

//     return str === reversed;
// }
// module.exports = palindrome;

// clean code version of above code
// function palindrome(str) {   
//     const reversed = str
//  .split('')
//  .reverse()
//  .join('');

// return str === reversed;
// }
// module.exports = palindrome;