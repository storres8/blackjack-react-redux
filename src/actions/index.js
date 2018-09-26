import { fetchInitialCards, fetchCardWithDeckId } from '../adapters/tableAdapters'

// Define and export your action creators here
// EXAMPLE:


export const loadInitialCards = () =>{
  return (dispatch) =>{
    fetchInitialCards()
    .then(cards => {
      dispatch(setCards(cards))
    })
  }
}

const setCards = (cards) => {
  return {
    type: 'LOAD_CARDS',
    payload: {
      cards
    }
  }
}

export const loadCardFromDeck = (deckId) =>{
  return (dispatch) => {
    fetchCardWithDeckId(deckId)
    .then(card =>{
      dispatch(drawCard(card.cards))
    })
  }
}

export const handleAceInHand = () => {
  return (dispatch) => {
    dispatch(handleAce())
  }
}

const handleAce = () => {
  return {
    type: 'HANDLE_ACE',
  }
}

const drawCard = (cards) =>{
  return {
    type: 'LOAD_CARD',
    payload:{
      cards
    }
  }
}
