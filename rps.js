const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]')
const playerScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
  {
  name: 'rock',
  emoji: '✊',
  beats: 'scissors'
  }, 
  {
  name: 'paper',
  emoji: '✋',
  beats: 'rock'
  },
  {
  name: 'scissors',
  emoji: '✌️',
  beats: 'paper'
  }
];

selectionButtons.forEach(selectionButtons => {
  selectionButtons.addEventListener('click', e => {
    const selectionName = selectionButtons.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name == selectionName)
    makeSelection(selection);
  })
})

function makeSelection(selection){
  const computerSelection = randomSelection()
  const Playerwin = isWinner(selection, computerSelection);
  const Computerwin = isWinner(computerSelection, selection);
  console.log(Playerwin);
  addSelectionResults(computerSelection, Computerwin);
  addSelectionResults(selection, Playerwin);
  if(Playerwin) incScore(playerScoreSpan);
  if(Computerwin) incScore(computerScoreSpan);
  
}

function isWinner(player, opponent){
  return player.beats === opponent.name;
}

function randomSelection(){
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function addSelectionResults(selection, winner){
  const resultSelections = document.querySelectorAll('.results-selection');
  
  // Check if there are more than five result-selection elements
  if(resultSelections.length > 8) {
    // Remove the first result-selection element
    resultSelections[8].remove();
    resultSelections[7].remove();
  }
  const div = document.createElement('div')
  div.innerText = selection.emoji;
  div.classList.add('results-selection');
  if(winner) 
  {
    div.classList.add('winner');
  }
  finalColumn.after(div);
  
}

function incScore(scoreSpan){
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}
