// Define the myFilterFunction
function myFilterFunction(words, callback) {
  const filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    if (callback(words[i])) {
      filteredWords.push(words[i]);
    }
  }
  return filteredWords;
}

// Define the callback function to check if a word has six letters
function hasSixLetters(word) {
  return word.length === 6;
}

// Sample array of strings with 10 words
const wordsArray = ["apple", "banana", "orange", "cherry", "peach", "grape", "papaya", "berry", "melon", "lychee"];

// Use myFilterFunction with the callback function
const filteredWordsArray = myFilterFunction(wordsArray, hasSixLetters);

// Display the filtered array on the client side
document.getElementById('output').textContent = "Filtered Words: " + filteredWordsArray.join(", ");