"use strict";
/*
  EASE
  ...
  ...
  PEST

  Check the length of the first and the last words, and make sure that both are in the same length.
  Make sure that there is only one letter in both words that are not changing.
  Make sure the number of steps is same as the number of letters that changed between the both words.
  Find the index of which letter doesn't change.

  for the length of both the first and the last words

*/
const getFixedIndex = (first, last) => {
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      return i;
    }
  }
  return undefined;
};

const checkLength = (first, last) => {
  if (first.length === last.length) {
    let sameCount = 0;
    for (let i = 0; i < first.length; i++) {
      if (first[i] === last[i]) {
        sameCount++;
      }
    }
    if (sameCount === 1) {
      for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
          return true;
        }
      }
    }
  }
  return false;
};

const generateLetterContainer = (first, last, fixedIndex) => {
  let container = [];
  for (let i = 0; i < first.length; i++) {
    container.push([first[i], last[i]]);
  }
  return container;
};
const firstWord = 'EASE';
const lastWord = 'PEST';
if (checkLength(firstWord, lastWord)) {
  const fixedIndex = getFixedIndex(firstWord, lastWord);
  if (fixedIndex !== undefined) {
    let lettersUsed = generateLetterContainer(firstWord, lastWord);
    console.log(lettersUsed);
    for (let i = 0; i < firstWord.length; i++) {
      if (i !== fixedIndex) {

      }
    }
  }
}
