

export function drawRow(rowNumber, currentRow){
  for(let i = 1; i <= currentRow.length; i++){
    let cell = document.querySelector(`#r${rowNumber}c${i}`);
    cell.textContent = currentRow[i - 1];
  }
}