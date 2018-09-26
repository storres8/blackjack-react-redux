export const fetchInitialCards = () => {
  return fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=4`)
   .then(resp => resp.json())
}


export const fetchCardWithDeckId = (deckId) => {
  return fetch (`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then(resp => resp.json())
}
