import { wordList } from "./wordList.js";
import { printConsole, randomNumber } from "./customFunc.js";
import { drawRow } from "./keyboard.js";

let randomIndex = randomNumber();
let wordle = wordList[randomIndex].toUpperCase();
let wordleArr = wordle.split("");
let currentRow = [];
let rowNumber = 1;
let gameOver = false;

// FUNCTIONS

function handleInput(char){
  if(currentRow.length <= 5 && char == 'delete'){
    let cellEl = document.querySelector(`#r${rowNumber}c${currentRow.length}`)
    cellEl.textContent = ""
    currentRow.pop()
    console.log(currentRow)
    drawRow(rowNumber, currentRow)
  } else if(currentRow.length < 5 && char != 'enter'){
    currentRow.push(char)
    drawRow(rowNumber, currentRow)
  } else if(currentRow.length < 5 && char == 'enter'){
    alert('You must type a 5-letter word!')
  } else if(currentRow.length == 5 && char == 'enter'){
    checkCharacter()
    rowNumber += 1
    checkGameOver()
    currentRow = []
  }

}

function checkCharacter(){
  for(let i = 0; i < wordleArr.length; i++){
    let cellCheckEl = document.querySelector(`#r${rowNumber}c${i + 1}`)
    console.log(cellCheckEl)
    if(wordleArr.includes(currentRow[i])){
      if(currentRow[i] == wordleArr[i]){
        cellCheckEl.classList.add('cell--green')
      } else {
        cellCheckEl.classList.add('cell--yellow')
      }
    } else {
      cellCheckEl.classList.add('cell--red')
    }
  }
}

function checkGameOver(){
  if(JSON.stringify(currentRow) == JSON.stringify(wordleArr)){
    alert(`YOU WON! \n The word is ${wordle}`)
    window.removeEventListener('click', handleKeyboard)
  } else if (rowNumber > 6){
    alert(`GAME OVER \n The word is ${wordle}`)
    window.removeEventListener('click', handleKeyboard)
  }
}

function handleKeyboard(e){
  let char = e.target.getAttribute('data-char');
  if(e.target.classList.contains('kb')){
    printConsole(char)
    handleInput(char)
}
}

// EVENT LISTENERS

window.addEventListener('click', handleKeyboard)

printConsole(wordle)