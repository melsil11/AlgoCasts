// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;

// ////easiest solution but interview might ask for an alternative way of solving this
// function reverse(str) {
//     // /////not very clean code
//     // const arr = str.split('')
//     // arr.reverse()
//     // return arr.join('')

//     // clean code version 
//     return str
//     .split('')
//     .reverse()
//     .join('')
// }

// //// for loop solution with new for loop syntax instead of the let i = 0; i < 0; i++
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }
    
//     return reversed;
// }


// using debugger
// function reverse(str) {
//     debugger;
//     return str.split('').reduce((reversed, character) => character + reversed, '');
// }
// reverse('apple');
// module.exports = reverse;

// make sure to remove the debugger when done and if need be remove the called function if it wasn't necessary 
