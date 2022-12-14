"use strict";

let engLetter = new Map([
  ["q", "й"],
  ["w", "ц"],
  ["e", "у"],
  ["r", "к"],
  ["t", "е"],
  ["y", "н"],
  ["u", "г"],
  ["i", "ш"],
  ["o", "щ"],
  ["p", "з"],
  ["[", "х"],
  ["]", "ъ"],
  ["a", "ф"],
  ["s", "ы"],
  ["d", "в"],
  ["f", "а"],
  ["g", "п"],
  ["h", "р"],
  ["j", "о"],
  ["k", "л"],
  ["l", "д"],
  [";", "ж"],
  ["'", "э"],
  ["z", "я"],
  ["x", "ч"],
  ["c", "с"],
  ["v", "м"],
  ["b", "и"],
  ["n", "т"],
  ["m", "ь"],
  [",", "б"],
  [".", "ю"],
  ["/", "."],
  ["Q", "Й"],
  ["W", "Ц"],
  ["E", "У"],
  ["R", "К"],
  ["T", "Е"],
  ["Y", "Н"],
  ["U", "Г"],
  ["I", "Ш"],
  ["O", "Щ"],
  ["P", "З"],
  ["{", "Х"],
  ["}", "Ъ"],
  ["A", "Ф"],
  ["S", "Ы"],
  ["D", "В"],
  ["F", "А"],
  ["G", "П"],
  ["H", "Р"],
  ["J", "О"],
  ["K", "Л"],
  ["L", "Д"],
  [":", "Ж"],
  [`"`, "Э"],
  ["Z", "Я"],
  ["X", "Ч"],
  ["C", "С"],
  ["V", "М"],
  ["B", "И"],
  ["N", "Т"],
  ["M", "Ь"],
  ["<", "Б"],
  [">", "Ю"],
  ["?", ","],
  ["б", ","],
]);

function engToRus(str) {
  let arr = str.split("");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      result.push(" ");
    }

    if (!engLetter.has(arr[i])) {
      result.push(arr[i]);
      continue;
    }

    for (let letter of engLetter.keys()) {
      if (arr[i] == letter) {
        result.push(engLetter.get(letter));
      }
    }
  }

  return result.join("");
}

function text() {
  let str = document.querySelector(".input-text").value;
  let textOutput = document.querySelector(".output-text");

  textOutput.innerHTML = engToRus(str);
}

let love = `
     ******       ******
   **********   **********
 ************* *************
*****************************
*****************************
*****************************
 ***************************
   ***********************
     *******************
       ***************
         ***********
           *******
             ***
              *
`;

console.log(love);
