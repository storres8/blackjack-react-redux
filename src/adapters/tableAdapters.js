export const fetchInitialCards = () => {
  return fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=4`)
   .then(resp => resp.json())
}


export const fetchCardWithDeckId = (deckId) => {
  return fetch (`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then(resp => resp.json())
}

export const fetchPlayAgainCards = (deckId) =>{
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
  .then(resp => resp.json())
}

export const fetchShuffleCards = (deckId) =>{
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
  .then(resp => resp.json())
}
