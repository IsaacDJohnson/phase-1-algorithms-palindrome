function isPalindrome(word) {
  // Write your algorithm here
 const array1 = [...word]
 console.log(array1)
 const reversedArray = array1.reverse()
 console.log(reversedArray)

  if (word === reversedArray.join('')){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/
//if string is a palindrome 
  // return true
  // else return false
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

